import './App.scss';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import NotFound from './pages/NotFound/NotFound';

class App extends Component {

  render() {

    return (
      <div className='app'>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/upload" component={Upload} />
            <Route path="/" exact component={Home} />
            <Route
              path="/:id"
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;