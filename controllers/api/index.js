const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);


module.exports = router;



/// will need to add routes here to allow logged in users to post to blog