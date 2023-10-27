
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks/redux'
import { userSlice } from './store/reducers/UserSlice'


function App() {

  const {count} = useAppSelector(state => state.userReducer)
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch();

  console.log(increment(5))

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment(1))}>INC</button>
      </div>
    </>
  )
}

export default App
