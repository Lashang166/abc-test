import React, { useEffect } from 'react'
import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './routes'
import userActions from './store/actions/userActions'

function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.userState)

  useEffect(() => {
    dispatch(userActions.auth())
    
  }, [])


  return (
    loading? <h1>loading</h1> :
    <Router>
      <div className="App">
        <div className="container">
        <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
