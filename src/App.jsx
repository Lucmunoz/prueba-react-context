import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";


import { useEffect, useContext } from 'react';
import { MyContext } from './context/MyContext';

const App = () => {
  
  const { generateData, PHOTO_URL } = useContext(MyContext)
 
  useEffect(() => {
    getData(generateData, PHOTO_URL)
  }, []);

   const getData = async (generateData, PHOTO_URL) => {
    fetch(PHOTO_URL)
      .then(response => response.json())
      .then(data => { generateData(data.photos) })
      .catch(error => console.error('Error fetching JSON:', error));
  }
  

  return (

      <div>
        { }
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
