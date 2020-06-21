const { Router } = require('express');
const { addComment, getComments } = require('../db/methods');

const commentRouter = Router();

commentRouter.get('/', (req, res) => {
  const { movementId } = req.query || {};
  const id = parseFloat(movementId);

  // get all comments for an individual movement
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
  // post the comments to the database
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
