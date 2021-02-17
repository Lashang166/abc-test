import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routes'

function App() {
  return (
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
