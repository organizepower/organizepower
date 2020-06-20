import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Say something..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input type="submit" value="Post" />
    </form>
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
