import React, { useState, useEffect } from 'react';

// sub component of commentListItem where we recieve a comment
const CommentListItem = ({ comment, key }) => {
  // destructure the username and comment out of props
  const { username, commentText } = comment;
  return (
    <div className="comment" id={key}>
      {/* display the username and comment on the page */}
      <p className="text-gray-600 leading-none">{username}: {commentText}</p>
    </div>
  );
};

export default CommentListItem;
