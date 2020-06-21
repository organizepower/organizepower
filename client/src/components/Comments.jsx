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
        setComments(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/comment', { movementId: id, comment: text, authorId: user.id })
      .then(() => {
        axios.get('/comment', { params: { movementId: id } })
          .then((response) => {
            setComments(response.data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const areThereComments = comments.length > 0;

  return (
    <div>
      {user && (
        <form className="commentForm" onSubmit={handleSubmit}>
          <textarea
            className="shadow appearance-none border border-gray-200 rounded w-full h-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline m-2"
            type="text"
            placeholder="Say something..."
            onChange={e => setText(e.target.value)}
          />
          <input className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-2 float-right" type="submit" value="Submit" />
        </form>
      )}
      <div className="commentBox">
        {areThereComments && (<CommentList comments={comments} />)}
      </div>
    </div>
  );
};

export default Comments;
