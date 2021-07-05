import React from "react";

import data from "../../data.json";

import "./Card.scss";
const Card = () => {
    let selectedCatrgories = [];


    const clickHandler = (categories) => {
        selectedCatrgories.push(categories);

        console.log(selectedCatrgories)
    }   


  return (
    <div className="card">
      {data.map((item) => (
        <div className="card__container">
          <div className="card__info">
            <img className="card__logo" src={item.logo} alt={item.logo}></img>

            <div className="card__left-section">
              <div className="card__details">
                <small className="card__company-name">{item.company}</small>
                <div className="card__job">
                  <span className={item.new ? "card__job--new active" : "card__job--new"}>
                    {item.new ? "new!" : ""}
                  </span>
                  <span className={item.featured ? "card__job--featured active" : "card__job--featured"}>
                    {item.featured ? "featured" : ""}
                  </span>
                </div>
              </div>

              <h1 className="card__position">{item.position}</h1>

              <div className="card__content">
                <small className="card__posted-at">{item.postedAt}</small>
                <small className="card__contract">{item.contract}</small>
                <small className="card__location">{item.location}</small>
              </div>
            </div>
          </div>

          <div className="card__categories">
            {item.languages.map((language) => (
              <span className="card__category" onClick={() => clickHandler(language)}>{language}</span>
            ))}
            {item.tools.map((tool) => (
              <span className="card__category" onClick={() => clickHandler(tool)}>{tool}</span>
            ))}
            <span className="card__category" onClick={() => clickHandler(item.role)}>{item.role}</span>
            <span className="card__category" onClick={() => clickHandler(item.level)}>{item.level}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
