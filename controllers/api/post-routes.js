const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get posts

router.get("/", (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "description", "created_at"],
        order: [
            ["created_at", "DESC"]
        ],

        include: [{
            model: User,
            attributes: ["username"],
        },
        {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
                model: User,
                attributes: ["username"],
            }

        },
        ]
    })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);

        }
        )
});

// make a new post

router.post("/", withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id,



    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});















module.exports = router;