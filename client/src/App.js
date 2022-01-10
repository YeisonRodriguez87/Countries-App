import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import ActivityCreate from './components/ActivityCreate';



function App() {
  return (    
    <div className="App">
     <BrowserRouter> 
        <Routes>          
          <Route path = '/' element = {<LandingPage/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/activity' element = {<ActivityCreate/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
