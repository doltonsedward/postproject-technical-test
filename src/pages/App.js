import './App.css';
import { 
  BrowserRouter as Router,  
  Route,
  Switch
} from 'react-router-dom'

import Home from './Home';
import DetailPost from './DetailPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail-post/:id">
          <DetailPost />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App