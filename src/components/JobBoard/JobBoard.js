import React from "react";

const JobBoard = ({
  job: {
    company,
    logo,
    location,
    isNew,
    featured,
    languages,
    tools,
    level,
    role,
    contract,
    position,
    postedAt,
  },

  handleTagClick
}) => {
    const tags = [role, level]

    if(tools) {
        tags.push(...tools)
    }

    if(languages) {
        tags.push(...languages)
    }

  return (

    <div className="card__container">
      <div className="card__info">
        <img className="card__logo" src={logo} alt={logo}></img>

        <div className="card__left-section">
          <div className="card__details">
            <small className="card__company-name">{company}</small>
            <div className="card__job">
              {isNew && (
                <span
                  className="card__job--new"
                >
                New!
                </span>
              )}

              {featured && (
                <span
                  className= "card__job--featured"
                   >
                  featured
                </span>
              )}
            </div>
          </div>

          <h1 className="card__position">{position}</h1>

          <p className="card__content">
            {postedAt} &middot; {contract} &middot; {location}
          </p>
        </div>
      </div>

      <div className="card__categories">
        {tags ? tags.map((tag) => (
          <span className="card__category" onClick={() =>  handleTagClick(tag)}>{tag}</span>
        )) : ''}
      </div>
    </div>
  );
};

export default JobBoard;
