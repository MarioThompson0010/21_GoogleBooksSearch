import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
      <Link
              to="/Search"
            >
              Google Book Search
            </Link>
        
      </a>
      <a className="navbar-brand" href="/">
      <Link
              to="/Saved"
            >
              Google Book Search
            </Link>
        
      </a>

      
    </nav>
  );
}

export default Nav;
