import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import GaleriaInstructivos from './Instructivos'
import image from './assets/folder_icon.png';
let ready = false;

function Instructivos() {
  let [responseData, setResponseData] = React.useState([]);

  React.useEffect(() => {
    if (!ready) {
      axios
        .get(`https://sip2-backend.herokuapp.com/Profesionales/23/Instructivo`)
        .then((response) => {
          console.log(response.data);
          setResponseData(response.data);
          ready = true;
        })
        .catch((error) => {
          console.log(error);
          ready = true;
        });
      ready = true;
    }
  }, [setResponseData, responseData]);

  /*
   const tileData = [
     {
       img: image,
       title: 'HOLAAAAAAAAAAAAAAA',
       author: 'LUCAS',
     },
     {
        img: image,
        title: 'DOS',
        author: 'LUCAS',
      },
    ];*/

  return (
    <div>
      <NavBar></NavBar>

      <GaleriaInstructivos elem={responseData}></GaleriaInstructivos>
    </div>
  );
}

export default Instructivos;
