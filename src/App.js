import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/Home';
import Beans from './pages/beans/Beans';
import './App.css';
import Header from './components/Header/Header';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={() => <Home/>}/>
                <Route exact path="/projects" component={() => <Projects/>}/>
                <Route exact path="/beans" component={() => <Beans/>}/>
            </Switch>
        </Router>
        {/* <Home/> */}
        {/* <Beans/> */}
    </div>
  );
}

export default App;
