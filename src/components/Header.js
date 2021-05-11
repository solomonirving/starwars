import React from "react";
import starwars from "../img/starwars.png";

export default function Header() {
  return (
    <header className="center">
      <img src={starwars} alt="" />
    </header>
  );
}
