
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterAndLogin from './pages/Register&Login/RegisterAndLogin';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<RegisterAndLogin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
