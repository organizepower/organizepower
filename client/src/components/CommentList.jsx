import React, { useState, useEffect } from 'react';
import CommentListItem from './CommentListItem.jsx';
// sub component of Comments.jsx
const CommentList = ({ comments }) => {
  return (
    <div>
      <p className="font-bold">Comments</p>
      {/* if there are comments map through them and pass down each comment, with he latest comment on top, to commentListItem */}
      {comments.length && comments.reverse().map(comment => (
        <div key={comment.id}>
          <CommentListItem comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
