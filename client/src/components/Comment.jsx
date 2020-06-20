import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CommentList = () => {
  return (
    <div className="commentList">
      Yeahhhh I am a CommentList.
    </div>
  );
};

const CommentForm = () => {
  return (
    <div className="commentForm">
      Party Parrot time. I am a CommentForm.
    </div>
  );
};

const Comment = () => {
  return (
    <div className="commentBox">
      We created a React div component! WOO!
      <CommentList />
      <CommentForm />
    </div>
  );
};

export default Comment;
