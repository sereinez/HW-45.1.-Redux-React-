import { useSelector, useDispatch } from 'react-redux';
import DataFetcher from './components/DataFetcher';
import { increment, decrement, selectPostId } from './redux/slices/postIdSlice';
import './App.css';

function App() {
  // useSelector — читання стану, useDispatch — виклик дій
  const postId = useSelector(selectPostId);
  const dispatch = useDispatch();

  return (
    <div id="homework">
      <h1>Домашнє завдання: Redux Toolkit</h1>

      <DataFetcher />

      <div className="controls">
        <button onClick={() => dispatch(decrement())} disabled={postId <= 1}>
          Попередній пост
        </button>
        <button onClick={() => dispatch(increment())}>
          Наступний пост
        </button>
      </div>
    </div>
  );
}

export default App;
