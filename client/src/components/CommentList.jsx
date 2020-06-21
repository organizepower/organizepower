import React, { useState, useEffect } from 'react';
import CommentListItem from './CommentListItem.jsx';
// sub component
const CommentList = ({ comments }) => {
  return (
    <div>
      <p className="font-bold">Comments</p>
      {comments.length && comments.reverse().map(comment => (
        <div key={comment.id}>
          <CommentListItem comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
