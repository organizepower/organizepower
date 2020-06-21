import React, { useState, useEffect } from 'react';
import moment from 'moment';

// sub component of commentListItem where we recieve a comment
const CommentListItem = ({ comment, key }) => {
  // destructure the username and comment out of props
  const { username, commentText, createdAt } = comment;

  return (
    <div className="border rounded shadow-xs p-4" id={key}>
      <p className="text-gray-600 font-bold text-s leading-none">Comment from {username}:</p>
      <span className="text-gray-400 text-xs mt-1">{moment(createdAt).fromNow()} - {moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>
      <p className="text-gray-600 leading-none ml-4 mt-2">{commentText}</p>
    </div>
  );
};

export default CommentListItem;
