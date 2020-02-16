const router = require('express').Router();
const verify = require('../middleware/verify')

const CommentsController = require('../controllers/CommentsController');

router.get('/:bugId/comments', CommentsController.getComments);
router.patch('/:bugId/comments', CommentsController.createComment);
router.patch('/:bugId/comments/:comment_id', CommentsController.updateComment);
router.delete('/:bugId/comments/:comment_id', CommentsController.deleteComment);

module.exports = router;