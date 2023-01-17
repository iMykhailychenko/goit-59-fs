import { useState } from 'react';

import { CommentForm } from './CommentForm/CommentForm';
import { CommentList } from './CommentList/CommentList';

const CommentsPage = () => {
  const [comments, setComments] = useState(null);

  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};

export default CommentsPage;
