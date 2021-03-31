const User = require('./User');
const Post = require('./Post');
const Comment = require("./Comment");


//associations user can have many posts  posts belong to user -- comments can belong to user and post, user can have many comments and post can have many comments
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_ud",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "pose_id",
  onDelete: "CASCADE",
});
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",

});

Post.hasMany(Comment, {
  foreignKey: "post_id"
});



module.exports = { User, Post, Comment };



///this page imports models, users can have multiple posts