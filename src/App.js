import React, {useState} from "react";
import Formulario from "./componentes/Formulario";
import MiPrimerComponente from "./componentes/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";

const App = () => {

  const [listado, setListado] = useState([
    {
      nombre: "Pedro",
      apellido: "Páramo",
      edad: 32,
      ciudad: "Comala"
    },
    {
      nombre: "Pablo",
      apellido: "Picasso",
      edad: 50,
      ciudad: "Paris"
    },
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 20,
      ciudad: "México"
    }
  ]);

  return (
    <div className="App">
      <h1>¡Bienvenida a tu primer app en React!</h1>
      <MiPrimerComponente />

      <PersonCard nombre="Juana" apellido="De Arco" edad={18} ciudad="Paris" />
      <PersonCard nombre="Elena" apellido="De Troya" edad={30} ciudad="Roma" />

      {
        listado.map( persona =>
            <PersonCardFuncional nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} ciudad={persona.ciudad} />
          )
      }

      <Formulario />

    </div>
  );
}

export default App;
