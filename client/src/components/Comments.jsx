import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList.jsx';

// lead component for comment box 
// recives props from Movement.jsx
const Comments = ({ movement, user }) => {
  const { id } = movement;
  // create wo state values of text and comments
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  // grab all the comments that are already stored in the database
  useEffect(() => {
    axios.get('/comment', { params: { movementId: id } })
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  /*  when the comment button is clicked save the comment to the
  database and also grab it from the dataabse
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    // we ill send a body with a movementId, comment and user
    axios.post('/comment', { movementId: id, comment: text, authorId: user.id })
      .then((response) => console.log(response))
      .then(() => {
        // then we will get that data back from the db
        axios.get('/comment', { params: { movementId: id } })
          .then((response) => {
            console.log(response.data);
            // reassign the comments state to be the result
            setComments(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const areThereComments = comments.length > 0 ? true : false;

  return (
    <div>
      {/* conditionally render the text box if a user is logged in */}
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
        {/* if there are comments render the comment list component and pass down the comments */}
        {areThereComments && (<CommentList comments={comments} />)}
      </div>
    </div>
  );
};

export default Comments;
