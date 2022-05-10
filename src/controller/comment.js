const Comment = require('../models/commentSchema');

const createComment = (req, res) => {
  const id = req.params.id;
  const { comment, timestamp, user, avatar, tree } = req.body;

  Comment.create({
    comment: comment,
    timestamp: timestamp,
    user: user,
    avatar: avatar,
    tree: tree,
  }).then((comment) => res.send(comment));
};

const getAllComments = (req, res) => {
  Comment.find().then((comment) => res.send(comment));
};

const getAllCommentsFromTree = (req, res) => {
  Comment.find({ tree: req.params.id })
    .sort({ timestamp: -1 })
    .then((comment) => res.send(comment));
};

const deleteComment = (req, res) => {
  Comment.findByIdAndRemove({ _id: req.params.id }).then((comment) =>
    res.send(comment)
  );
};

module.exports = {
  createComment,
  getAllComments,
  getAllCommentsFromTree,
  deleteComment,
};
