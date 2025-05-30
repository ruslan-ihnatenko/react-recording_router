import { useContext, useEffect, useState } from 'react';
import { Post } from '../types';
import { getPost } from '../services/post';
import { Loader } from '../components/Loader';
import { PostForm } from '../components/PostForm';
import { PostsContext } from '../store/PostsContext';
import { useUsers } from '../store/UsersContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const PostDetailsPage = () => {
  const { updatePost } = useContext(PostsContext);
  const users = useUsers();
  const { postId } = useParams();
  const postIdNumber = postId ? +postId : 0;
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
    setLoading(true);

    getPost(postIdNumber)
      .then(setPost)
      .catch(() => {
        setErrorMessage(`Can't load a post`);
        setTimeout(() => {
          navigate('..');
        }, 2000);
      })
      .finally(() => setLoading(false));
  }, [postIdNumber]);

  if (!postIdNumber || !Number.isInteger(postIdNumber)) {
    return <Navigate to=".." />;
  }

  return <>
    <h1 className="title">Edit post {postIdNumber}</h1>

    {loading && <Loader />}

    {errorMessage && (
      <p className="notification is-danger">{errorMessage}</p>
    )}

    {!loading && !errorMessage && post && (
      <PostForm
        users={users}
        fixedUserId={11}
        post={post}
        onSubmit={(updatedPost) => {
          return updatePost(updatedPost)
            .then(() => navigate('..'));
        }}
      />
    )}
  </>;
};
