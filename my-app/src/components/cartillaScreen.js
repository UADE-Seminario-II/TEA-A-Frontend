import React,{ useState, useEffect } from "react";
import CartasExperiencia from "./CartasExperiencia";
import NavBar from "./NavBar";
import axios from 'axios'

function Cartilla() {
  let [responseData, setResponseData] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://sip2-backend.herokuapp.com/Experiencias`)
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(responseData)
  }, [setResponseData, responseData])
  
  return (
    <div>
      <NavBar></NavBar>

      <CartasExperiencia cartas={responseData}></CartasExperiencia>
    </div>
  );
}

export default Cartilla;
