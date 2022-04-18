import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav.js';
import Home from './pages/Home/Home.js';
import Upload from './pages/Upload/Upload.js';
import FourOhFour from './pages/FourOhFour/FourOhFour';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Home} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App