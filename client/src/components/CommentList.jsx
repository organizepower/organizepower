import React, { useState, useEffect } from 'react';
import CommentListItem from './CommentListItem.jsx';
// sub component of Comments.jsx
const CommentList = ({ comments }) => {
  return (
    <div className="mt-10">
      <p className="font-bold text-gray-800 text-xl ml-4">Comments</p>
      {/* if there are comments map through them and pass down each comment,
      with he latest comment on top, to commentListItem */}
      {comments.length && comments.reverse().map(comment => (
        <div className="ml-4 mt-4 mb-4" key={comment.id}>
          <CommentListItem comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentList;
