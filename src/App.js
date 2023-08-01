import MiPrimerComponente from "./componentes/MiPrimerComponente";
import PersonCard from "./componentes/PersonCard";

const App = () => {
  return (
    <div className="App">
      <h1>¡Bienvenida a tu primer app en React!</h1>
      <MiPrimerComponente />

      <PersonCard nombre="Juana" apellido="De Arco" edad="18" ciudad="Paris" />
      <PersonCard nombre="Elena" apellido="De Troya" edad="30" ciudad="Roma" />


    </div>
  );
}

export default App;
