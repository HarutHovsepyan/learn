import './App.css';
import {useDispatch, useSelector} from "react-redux"

function App() {
  const name = useSelector(function(state) {
    return state.currentUser.name
  })

  const dispach = useDispatch()
  return (
    <div className="App">
      <h1>{name}</h1>

      <input type='text' value={name} onChange={(evt) => {
        dispach({
          type: "edit-current-user-name",
          payload: {
            name: evt.target.value
          }
        })
      }} />
    </div>
  );
}

export default App;
