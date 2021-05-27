import React, { useState, useEffect } from "react";
import CartasExperiencia from "./CartasExperiencia";
import NavBar from "./NavBar";
import axios from "axios";

let ready = false;

function Cartilla() {
  let [responseData, setResponseData] = React.useState([]);

  React.useEffect(() => {
    if (!ready) {
      axios
        .get(`https://sip2-backend.herokuapp.com/Actividades/experiencias/45`)
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

  return (
    <div>
      <NavBar></NavBar>

      <CartasExperiencia cartas={responseData}></CartasExperiencia>
    </div>
  );
}

export default Cartilla;
