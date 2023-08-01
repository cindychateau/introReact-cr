import React from "react";

class PersonCard extends React.Component {

    render() {
        /*
        this.props = {
            nombre="Elena" apellido="De Troya" edad="30" ciudad="Roma"
        }
        */
        const {nombre, apellido, edad, ciudad} = this.props;
        //nombre = this.props.nombre
        //apellido = this.props.apellido
        //nombre = "Elena", apellido = "De Troya", edad = 30, ciudad = "Roma"
        return(
            <div className="col-3 card">
                <h2>{nombre} {apellido}</h2>
                <p>Edad: {edad}</p>
                <p>Ciudad: {ciudad}</p>
            </div>
        )

    }

}
export default PersonCard;