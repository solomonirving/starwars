import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <span>Home</span>
      </Link>

      <Link to="/vehicles">
        <span>Vehicles</span>
      </Link>

      <Link to="/starships">
        <span>Starships</span>
      </Link>
    </div>
  );
}
