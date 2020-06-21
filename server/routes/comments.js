const { Router } = require('express');
const { addComment, getComments } = require('../db/methods');

const commentRouter = Router();

commentRouter.get('/', (req, res) => {
  const { movementId } = req.query || {};
  // the id comes in as a string, so we need to make it to a number
  const id = parseFloat(movementId);
  // the method that get all the comments for an individual movement
  getComments(id)
    .then((comments) => {
      res.send(comments);
    })
    .catch(err => {
      console.error(err);
    });
});

commentRouter.post('/', (req, res) => {
  const { movementId, comment, authorId } = req.body;
  // the method that adds the comments to the database
  addComment(movementId, comment, authorId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = {
  commentRouter,
};
