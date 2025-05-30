import React, { useContext } from 'react';
import { Post } from '../types/Post';
import { Link } from 'react-router-dom';
import { PostsContext } from '../store/PostsContext';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  const { deletePost } = useContext(PostsContext);

  return (
    <table className="table is-striped is-narrow">
      <thead>
        <tr className="has-background-link-light">
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {posts.map(post => (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <Link
                to={`${post.id}`}
                className="icon button is-inverted is-info"
              >
                <i className="fas fa-pen" />
              </Link>
            </td>
            <td>
              <button
                className="icon button is-inverted is-danger"
                onClick={() => deletePost(post.id)}
              >
                <i className="fas fa-xmark" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
