import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {

  return (

    /* No defino my context provider aca (lo defino en main.jsx) para poder hacer uso del contexto mediante useContext. Con esto, podemos llamar 
    la función "generateData" y utilizarla.
    
    Esta función es la encargad de "generar" la data que renderizaremos la que en definiva es un arreglo de objetos y que se lee desde un archivo
    JSon. 
    
    A fin de "generar" ( o cargar ) la data una vez, haremos uso de useEffect entregando el arreglo de dependencias para que se ejecute una unica
    vez al momento en que se monte el componente App. Dentro del useEffect llamamos a la función "getData" la cual ejecutará la función "generateData"
    la cual es la encargada de obtener el arreglo de datos desde el archivo Json y "setear" el estado global del contexto (definido en MyContext)
    con este arreglo de datos.
    */
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </div>
  );
};
export default App;
