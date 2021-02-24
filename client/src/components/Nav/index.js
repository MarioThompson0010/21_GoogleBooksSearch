import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {/* <a className="navbar-brand" href="/"> */}
      <Link className="navbar-brand"
              to="/Search"
            >
              Google Book Search
            </Link>
        
      {/* </a> */}
      {/* <a className="navbar-brand" href="/"> */}
      <Link className="navbar-brand"
              to="/SavedFunc"
            >
              Go to Saved Books
            </Link>
        
      {/* </a> */}

      
    </nav>
  );
}

export default Nav;
