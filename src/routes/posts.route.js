const route = require('express').Router();
const { postsController } = require('../controllers');
const { validateToken, validatePosts } = require('../middlewares');

route.post('/', validateToken, validatePosts, postsController.createPost);
route.get('/', validateToken, postsController.getPostsByUserId);
route.get('/:id', validateToken, postsController.getPostById);
route.put('/:id', validateToken, validatePosts, postsController.updatePost);

module.exports = route;