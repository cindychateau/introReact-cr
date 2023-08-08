import React, {useState} from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [color, setColor] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);


    const crearUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = {nombre, apellido, edad, color}; //Creamos objeto
        console.log(nuevoUsuario);
        setNombre("");
        setApellido("");
        setEdad("");
        setColor("");
        setHizoSubmit(true);
    }

    return(
        <form onSubmit={crearUsuario}>
            <h2>Crear Usuario</h2>
            <h5>
                {hizoSubmit ? "¡Gracias por ingresar tus datos!" : "Favor de ingresar los datos" }
            </h5>
            <div>
                <label>Nombre:</label>
                <input className="form-control" onChange={ e => setNombre(e.target.value) } value={nombre} />
            </div>
            <div>
                <label>Apellido:</label>
                <input className="form-control" onChange={ e => setApellido(e.target.value) } value={apellido} />
            </div>
            <div>
                <label>Edad:</label>
                <input className="form-control" onChange={ e => setEdad(e.target.value)} value={edad} />
            </div>
            <div>
                <label>Color de Cabello:</label>
                <input className="form-control" onChange={ e => setColor(e.target.value) } value={color} />
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario" />
        </form>
    )
}
export default Formulario;