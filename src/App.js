import './App.css';
import {Switch, Route,BrowserRouter as Router,Redirect } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'

function App() {
  return (
    <div className="App">
      <Router basename={"/"}>
        <Switch>
          <Route exact path="/"
            render={() => {
              return (
                <Redirect to="/home" />
              )
          }}/>
          <Route path="/home" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
