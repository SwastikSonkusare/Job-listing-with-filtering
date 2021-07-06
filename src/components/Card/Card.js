import React, { useState, useEffect } from "react";

import data from "../../data.json";
import JobBoard from "../JobBoard/JobBoard";

import "./Card.scss";
const Card = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }



    return filters.every((filter) => tags.includes(filter));

  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };


  const handleClearClick = () =>{
    setFilters([])
  }

  const filteredJobs = jobs.filter(filterFunc);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <>
      <div className="card">
        {filters.length > 0 && (
          <div className="filter__container">
            <div className="filter__box">
            {filters.map((filter) => (
              <span onClick={() => handleFilterClick(filter)}>
                <span className="filter__card">{filter}</span>
                <span className="filter__cancel">x</span>
              </span>
            ))}
            </div>

            <button className="filter__clear" onClick={handleClearClick}>Clear</button>
          </div>
        )}

        {filteredJobs.map((job) => (
          <JobBoard job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </>
  );
};

export default Card;
