import React, { useState } from "react";

const PersonCardFuncional = ({nombre, apellido, edad, ciudad}) => {

//[nombreVariable, funcionParaCambiar]
    const [edoCivil, setEdoCivil] = useState("Casado"); //crea variable y me crea una función para alterar

    const cambiarEdoCivil = () => {
        if(edoCivil ==="Casado") {
            setEdoCivil("Soltero");
        } else {
            setEdoCivil("Casado");
        }
    }

    /*  props.nombre = "Pedro"
        props.apellido = "Paramo"
        props.edad = 32
        props.ciudad = "Comala"*/

    return (
        <div>
            <h2>{nombre} {apellido}</h2>
            <p>Edad: {edad}</p>
            <p>Ciudad: {ciudad}</p>
            <p>Edo Civil: {edoCivil}</p>
            <button className="btn btn-info" onClick={cambiarEdoCivil}>Cambiar Edo</button>
        </div>
    )

}

export default PersonCardFuncional;
