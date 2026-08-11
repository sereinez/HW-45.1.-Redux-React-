import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { selectPostId } from '../redux/slices/postIdSlice';


function DataFetcher() {
  const postId = useSelector(selectPostId);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchPost() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!isCancelled) {
          setPost(response.data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchPost();

    return () => {
      isCancelled = true;
    };
  }, [postId]);

  if (loading) {
    return <p>Завантаження даних...</p>;
  }

  if (error) {
    return <p>Помилка завантаження: {error}</p>;
  }

  const { title, body } = post;

  return (
    <div>
      <h3>Пост #{postId}</h3>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default DataFetcher;
