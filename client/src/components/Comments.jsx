import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList.jsx';

// lead component
const Comments = ({ movement, user }) => {
  const { id } = movement;
  // const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/comment', { params: { movementId: id } })
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/comment', { movementId: id, comment: text, authorId: user.id })
      .then((response) => console.log(response))
      .then(() => {
        axios.get('/comment', { params: { movementId: id } })
          .then((response) => {
            console.log(response.data);
            setComments(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const areThereComments = comments.length > 0 ? true : false;

  return (
    <div>
      {user && (
        <form className="commentForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Say something..."
            onChange={e => setText(e.target.value)}
          />
          <input type="submit" value="Post" />
        </form>
      )}
      <div className="commentBox">
        {areThereComments && (<CommentList comments={comments} />)}
      </div>
    </div>
  );
};

export default Comments;
