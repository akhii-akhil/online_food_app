import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StarRating from './StarRating';

function Favorites() {
  const [data,setData]=useState([])
  useEffect(() => {
    console.log(sessionStorage.getItem("id"));
    axios.get(`https://backendd-o0vc.onrender.com/food_find/${sessionStorage.getItem("id")}`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    })
  },[])
  return (
    <>
      <h1>Favorites in app</h1>
    <div className="container">
      {
        data.map((i) => {
          return <div class="card" style={{ width: "18rem" }} >
          <img
            class="card-img-top"
            src={`https://backendd-o0vc.onrender.com/process/${i.image}`}
            alt="Card image cap"
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
               
          </div>
          </div>
          
        })
        }
        </div>
      </>
    
  )
}

export default Favorites