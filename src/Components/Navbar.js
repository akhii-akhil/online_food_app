import React from 'react'
import './Navbar.css'
import { useNavigate ,Link} from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  return (
    <>
      <ul className='NavOne'>
        <img src={process.env.PUBLIC_URL + '/dish.png'} alt="logo" style={{height:"40px",width:"40px",float: "left",marginLeft:"-32px"
  }} />
        {
          localStorage.getItem("username") && 
          <>
          <Link className='Nav_elmy' to={'/home'}>Home</Link>
            <Link className='Nav_elmy' to={'/Favorites'} >Favorites</Link>
            <Link className='Nav_elmy login' to={'/logout'}>logout ( { localStorage.getItem('username')})</Link>
            </>

        }
        {
          !localStorage.getItem("username") && 
          <>
          <Link className='Nav_elmy login' to={'/login'}>login</Link>
        <Link className='Nav_elmy login' to={'/Register'}>Register</Link>
        
          </> 
        }
        
        
      </ul>
      </>
  )
}

export default Navbar