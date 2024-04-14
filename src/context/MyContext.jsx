import { createContext, useState } from 'react'

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  
  const [data, setData] = useState([]);
  const PHOTO_URL = "../public/photos.json"

  const generateData = (array) => {
    setData(array)
  }

  return (
    < MyContext.Provider value={{ data, generateData, PHOTO_URL }}>
      {children}
    </MyContext.Provider> 
  )
}

export default MyContextProvider;