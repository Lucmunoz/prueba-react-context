import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid ">
         <div class="collapse navbar-collapse justify-content-center ">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
             <Link to="/"> Home </Link>
            </li>
            <p className='px-2 m-0'>|</p>
            <li class="nav-item">
              <Link to="/favoritos"> Favoritos </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  );
};
export default Navbar;
