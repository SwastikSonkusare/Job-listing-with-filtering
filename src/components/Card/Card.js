import React, { useState, useEffect } from "react";


import data from "../../data.json";
// import logo from '../../assets/images/account.svg'

import "./Card.scss";
const Card = () => {

  return (
    <div className="card">
      {data.map((item) => (
        <div className="card__container">
          <img className="card__logo" src={item.logo} alt={item.logo}></img>
         
        </div>
      ))}
    </div>
  );
};

export default Card;
