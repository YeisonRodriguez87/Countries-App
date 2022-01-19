import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ActivityCreate from './components/ActivityCreate';
import Detail from './components/Detail';


function App() {
  return (    
    <div className="App">
     <BrowserRouter> 
        <Routes>          
          <Route path = '/' element = {<LandingPage/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/activity' element = {<ActivityCreate/>}/>
          <Route path = '/home/:id' element = {<Detail/>}/>
          <Route path = '*' element = {<img src= "../Error404.png" alt= "Page Not Found"/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
