import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Nav from './components/Nav/Nav.js';
import Home from './pages/Home/Home.js';
import Upload from './pages/Upload/Upload.js';
import NotFound from './pages/NotFound/NotFound.js';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Home} />
          <Route path="/notfound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App