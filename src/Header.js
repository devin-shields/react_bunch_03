import React from "react";

function Header(props) {
  return (
    <div className="Header">
      <h3>{props.cityName}</h3>
      <h3>{props.temp}</h3>
      <h5>{props.isRaining}</h5>
    </div>
  );
}

export default Header;
