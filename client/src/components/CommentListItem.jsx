import React, { useState, useEffect } from 'react';

// sub component
const CommentListItem = ({ comment, key }) => {
  const { username, commentText } = comment;
  return (
    <div className="comment" id={key}>
      <p className="text-gray-600 leading-none">{username}: {commentText}</p>
    </div>
  );
};

export default CommentListItem;
