import './App.css';
import Food_List from './Components/Food_List';
import Food_items from './Components/Food_items';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router';
import Login from './Components/Login';
import Register from './Components/Register';
import { Favorite } from '@mui/icons-material';
import Favorites from './Components/Favorites';
import Logout from './Components/Logout';
function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <Navbar />
      <Header/>
      <Routes>
        {
          localStorage.getItem("username") && 
          <>
          <Route path='/home' element={<Food_items />} />
            <Route path='/Favorites' element={<Favorites />} />
            <Route path='/logout' element={<Logout/>} />
            </>
        }
        {
          !localStorage.getItem("username") &&
          <>
           <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
          </>
        }
       
      </Routes>
      
      
    </div>
  );
}

export default App;
