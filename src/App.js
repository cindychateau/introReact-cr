import Formulario from "./componentes/Formulario";
import MiPrimerComponente from "./componentes/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard";
import PersonCardFuncional from "./componentes/PersonCardFuncional";

const App = () => {
  return (
    <div className="App">
      <h1>¡Bienvenida a tu primer app en React!</h1>
      <MiPrimerComponente />

      <PersonCard nombre="Juana" apellido="De Arco" edad={18} ciudad="Paris" />
      <PersonCard nombre="Elena" apellido="De Troya" edad={30} ciudad="Roma" />

      <PersonCardFuncional nombre="Pedro" apellido="Paramo" edad={32} ciudad="Comala" />

      <Formulario />

    </div>
  );
}

export default App;
