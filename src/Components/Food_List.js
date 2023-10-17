import React from "react";
import "./Food_List.css";
import StarRating from "./StarRating";
import { useState } from "react";
import { useEffect } from "react";
import { useActionData } from "react-router";
import axios from "axios";
function Food_List({ data }) {
  {data.map((item) => {
    console.log(item.itemName);
  })}
  //document.getElementsByClassName("container")
  return (
    <>
        
    </>
  );
}

export default Food_List;
