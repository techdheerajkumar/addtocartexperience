import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="header navbar-light bg-light position-fixed w-100">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">ShoppingCart</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/products "
                      className="nav-link"
                      aria-current="page"
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item position-relative">
                    <NavLink
                      to="/cart "
                      className="nav-link"
                      aria-current="page"
                    >
                      My Cart
                    </NavLink>
                    {props.cartLength ? <span className="position-absolute">{props.cartLength}</span> : ''}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
