import { createContext, useState, useEffect } from 'react'
const PHOTO_URL = "../public/photos.json"

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const generateData = (array) => {
    setData(array)
  }

  /*A fin de cargar la data solo una vez, cuando se cargue el componente, agrego
  la lista de dependencias vacías. */
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(PHOTO_URL);
      if (!response.ok) {
        throw new Error("Error de lectura archivo JSON");
      }
      const data = await response.json();
      generateData(data.photos);

    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }

  return (
    < MyContext.Provider value={{ data, generateData }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider;