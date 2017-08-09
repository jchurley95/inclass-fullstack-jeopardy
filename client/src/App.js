import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import AddCategory from './components/AddCategory';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/'>Home</Link> <br />
            <Link to='/add-categories'>Add Category</Link>
          </div>
          <div>
            <Route exact path='/' components={Home} />
            <Route path='/add-categories' components={AddCategory} />
            <Route path='/game/:gameId' components={Game} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
