import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/upload" component={Upload} />
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App