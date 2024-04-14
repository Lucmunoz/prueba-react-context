import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
         <div className="collapse navbar-collapse justify-content-center ">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to="/"> Home </Link>
            </li>
            <p className='px-2 m-0'>|</p>
            <li className="nav-item">
              <Link to="/favoritos"> Favoritos </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
