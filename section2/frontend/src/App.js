import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter,Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import  Signup  from './components/Signup';
import EventHandling from './components/EventHandling';
import Footer from './components/Footer';
import UserManager from './components/UserManager';

function App() {
  return (
    <div>


<BrowserRouter>
    <Navbar/>  
  <Routes>
    <Route path="/" element={ <Navigate to="/home"/> } />
    
    <Route path="home" element={ <Home/>}/>
    
    <Route path="login" element={ <Login/>}/>
    

    <Route path="event" element={ <EventHandling/>}/>
    <Route path="signup" element={ <Signup/>}/>
    <Route path="footer" element={ <Footer/>}/>
    <Route path="event" element={ <EventHandling/>}/>
    <Route path="manager" element={ <UserManager/>}/>

  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
