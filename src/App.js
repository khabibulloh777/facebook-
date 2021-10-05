import './App.css';
import Home from './routers/Home-pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Friends from './routers/Friends/Friends';
import Login from './routers/Login-pages/Login'
function App() {
   return (
   <Router>
   <div className="app">
    <Switch> 
  
        <Route exact path="/" component={Home}/>
         <Route exact path="/friends" component={Friends} /> 
    
         <Login/>
    
 
   </Switch>
    </div>
    </Router>
  );
}

export default App;
