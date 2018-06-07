import React from 'react';
import ExperienceItem from './ExperienceItem.js';
import experienceData from '../data/experience-data.json';

const Experience = () => (
  <div>
    <div className="heading">
      <h2>
        <i className="fas fa-check-circle"></i>Experience
      </h2>
    </div>
    {
      experienceData.map(({title, company, city, startDate, endDate, description}, i) =>
      <ExperienceItem
        title={title}
        company={company}
        city={city}
        startDate={startDate}
        endDate={endDate}
        description={description}
        key={i}
        >
      </ExperienceItem>)
    }
  </div>
);

export default Experience;
