import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div className='text-center'>
      <h1  className='py-3'>Galería Natural Pic - Fotos favoritas</h1>
      <Gallery criteria={true} />
    </div>
  );
};
export default Favorites;
