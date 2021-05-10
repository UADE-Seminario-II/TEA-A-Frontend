import React from "react";
import CartasExperiencia from "./CartasExperiencia";
import NavBar from "./NavBar";

// Esto se tendrá que conseguir desde el backend
let actividadesDePrueba = [
  {
    id: 1,
    descripcion: "Esta es la descripcion de la actividad",
    latitud: "2846",
    longitud: "2184",
    localidad: {
      id: 1,
      localidad: "caba",
    },
  },
  {
    id: 2,
    descripcion: "Esta es la descripcion de la actividad",
    latitud: "1626",
    longitud: "8234",
    localidad: {
      id: 1,
      localidad: "caba",
    },
  },
  {
    id: 3,
    descripcion: "Esta es la descripcion de la actividad",
    latitud: "7526",
    longitud: "9234",
    localidad: {
      id: 1,
      localidad: "caba",
    },
  },
  {
    id: 4,
    descripcion: "Esta es la descripcion de la actividad",
    latitud: "7526",
    longitud: "9234",
    localidad: {
      id: 1,
      localidad: "caba",
    },
  },
  {
    id: 5,
    descripcion: "Esta es la descripcion de la actividad",
    latitud: "1623",
    longitud: "8456",
    localidad: {
      id: 1,
      localidad: "caba",
    },
  },
];

function Cartilla() {
  return (
    <div>
      <NavBar></NavBar>

      <CartasExperiencia cartas={actividadesDePrueba}></CartasExperiencia>
    </div>
  );
}

export default Cartilla;
