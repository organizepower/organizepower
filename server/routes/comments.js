const { Router } = require('express');
const { addComment, getComments } = require('../db/methods');

const commentRouter = Router();

commentRouter.get('/', (req, res) => {
  console.log(req);
  const { movementId } = req.query || {};
  const id = parseFloat(movementId);

  // get all comments for an individual movement
  getComments(id)
    .then((comments) => {
      res.send(comments);
    })
    .catch(err => {
      console.log(err);
    });
});

commentRouter.post('/', (req, res) => {
  console.log(req);
  const { movementId, comment, authorId } = req.body;
  // post the comments to the database
  addComment(movementId, comment, authorId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = {
  commentRouter,
};
