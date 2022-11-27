import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({name, destination="/"}) => {
  return(<li><Link to={destination}>{name}</Link></li>)
}

export default NavbarItem