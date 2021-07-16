import { useSelector, useDispatch } from 'react-redux';
import { increasement, descreasement } from './actions';



function App() {

  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      counter: {counter}
      <br />
      <button onClick={() => { dispatch(increasement(5)) }}
      >
        INCREASEMENT
      </button>
      <button onClick={() => { dispatch(descreasement(2)) }}
      >
        DECREASEMENT
      </button>
      <br />
      {isLoggedIn ? <p> message only open to logged in user</p> : ''}
    </div>
  );
}

export default App;
