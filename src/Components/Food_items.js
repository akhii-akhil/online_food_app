import React, { useEffect, useState } from 'react'
import './Food.css'
import StarRating from './StarRating'
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';
import Food_List from './Food_List';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router';
function Food_items() {
  const navigate=useNavigate()
  const [foodData, setFoodData] = useState([])
  const resp = async() => {
    await axios.get("https://backendd-o0vc.onrender.com/get_food").then((res) => {
    setFoodData(res.data)
  })
  }
  
  useEffect(() => {
    
     resp()
  },[])
  const searchfun = async(e) => {
    if (!e.target.value) {
      await resp()
    }
    else {
      await axios.get(`https://backendd-o0vc.onrender.com/search/${e.target.value}`).then((res) => {
        setFoodData(res.data)
      })
    }
    
  }
    
  return (
    <>
      
      <div className='search'>
     <input type="text" name="query" placeholder="Search..." className='search_css' onChange={(e)=>searchfun(e)}/>
        <SearchIcon style={{ fontSize: '28px' }}/>
     
      </div>
      <br />
      <br />
      <br />
      <br />
      
      <div className="container">
         
        
        {
          foodData.map((i,ind) => {
            return <div class="card" style={{ width: "18rem" }} >
          <img
            class="card-img-top"
            src={`https://backendd-o0vc.onrender.com/process/${i.image}`}
            alt={`Card image cap ${i.image}`}
          />
          <div class="card-body">
                <h5 class="card-title">{ i.itemName}</h5>
            <p class="card-text"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
             {i.Description}
            </li>
            <li className="stars">
              <StarRating />
            </li>
          </ul>
          <div class="card-body">
            <button className="btn btn-dark">Add to cart</button>
                <button className="btn btn-dark" onClick={() => {
                  sessionStorage.setItem("id", i._id)
                  navigate('/Favorites')
                  
            }}>Favorites</button>
          </div>
          </div>
          })
        }
       
      </div>
      </>
  )
}

export default Food_items