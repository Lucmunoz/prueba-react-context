import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

import { useEffect, useContext } from 'react';
import { MyContext } from './context/MyContext';

const App = () => {
  
  const { generateData, PHOTO_URL } = useContext(MyContext)
 
  useEffect(() => {
    getData();
  }, []);

   const getData = async () => {
    fetch(PHOTO_URL)
      .then(response => response.json())
      .then(data => { generateData(data.photos) })
      .catch(error => console.error('Error fetching JSON:', error));
  }
  

  return (
    
/* No defino my context provider aca (lo defino en main.jsx) ya que aca hago uso del useContext para llamar la función "generateData" y 
utilizarla dentro de getData.

getData es una función que mediante useEffect se ejecuta una unica vez al momento del montaje del componente App. Esta función ejecutará 
la función "generateData" la cual es la encargada de obtener el arreglo de datos desde el archivo Json y "setear" el estado global definido 
en MyContext con este arreglo de datos.
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
