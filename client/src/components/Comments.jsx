import React, { useState, useEffect } from 'react';
import axios from 'axios';

// sub component
const CommentList = ({ author, text }) => {
  return (
    <div>
      <CommentListItem author={author} text={text} />
    </div>
  );
};
// sub component
const CommentListItem = ({ author, text }) => {
  return (
    <div className="comment">
      <h2 className="commentAuthor">
        {author}
      </h2>
      <h2 className="commentText">
        {text}
      </h2>
    </div>
  );
};

// lead component
const Comments = ({ movement, user }) => {
  const { id } = movement;
  // const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('movement/comments', { movement: id, comment: text, author: user.id })
      .then((response) => console.log(response))
      .then(() => {
        axios.get('movement/comments')
          .then((response) => {
            console.log(response.data);
            setComments(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // setText(e.target.value);
  };

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
        <strong>Comments</strong>
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

// const CommentList = ({ data }) => {
//   // console.log(data)
//   // const commentNodes = data.map((comment) => {
//   //   console.log(data);
//   //   return (
//   //     <div>
//   //     <Comment author={comment.author} key={comment.id}>
//   //       {comment.text}
//   //     </Comment>
//   //     </div>
//   //   );
//   // });
//   return (
//     <div>
//       <Comment data={data} />
//     </div>
//   );
// };

// const Comment = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="comment">
//       <h2 className="commentAuthor">
//         {data[0].author}

//       </h2>
//       {data[0].text}
//     </div>
//   );
// };

// const Comments = ({ data }) => {
//   // comment box component
//   return (
//     <div className="commentBox">
//       <h1>WOO My Comment Box</h1>
//       <CommentList data={data} />
//       <CommentForm />
//     </div>
//   );
// };

export default Comments;
