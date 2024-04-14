import { useEffect, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import IconHeart from './IconHeart';

const Gallery = ({ criteria }) => {

  const { data, generateData } = useContext(MyContext)

  if (data.length == 0)
    return <></>

  const likePhoto = (e) => {
    const tempArray = [...data]
    const index = data.findIndex(objeto => objeto.id === e.id)
    if (tempArray[index].liked) {
      tempArray[index].liked = false
    }
    else {
      tempArray[index].liked = true
    }
    generateData(tempArray)
  }

  const renderPhotos = () => {
    
    /* criteria es un prop que se define en las vistas "Home" y "Favorites" a fin de definir que imagenes se mostrarán.
      Cuando es true, se mostrarán las imagenes cuya key prop sea true, es decir las que tienen like.*/
    if (criteria) {
      return (
        data.filter(element => element.liked==criteria).map((element) => {
          return (
            <div key={element.id} className="col">
              <div className="photo-container border h-100">
                <img src={element.src.tiny} />
              </div>
            </div>
          );
        })
      );
      
    }
    /* En caso contrario, si criteria es false, se muestran todas las imágenes. */
    else {
      return (
        data.map((element) => {
          return (
            <div key={element.id} className="col">
              <div className="photo-container border h-100">
                <div className='like-icon p-1' onClick={(() => likePhoto(element))}>
                  <IconHeart filled={element.liked} />
                </div>
                <img src={element.src.tiny} />
                <div className='alt-text'><p className='p-2 m-0'>{element.alt}</p></div>
              </div>
            </div>
          )
        })
      );
    }
  }

  return (
    <div className='container'>
      <div className="row row-cols-5 g-3">
        {renderPhotos()}
      </div>
    </div >
  )
};

export default Gallery;
