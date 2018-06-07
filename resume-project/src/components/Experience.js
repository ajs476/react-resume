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
      experienceData.map((experienceObject, i) =>
      <ExperienceItem
        title={experienceObject.title}
        company={experienceObject.company}
        city={experienceObject.city}
        startDate={experienceObject.startDate}
        endDate={experienceObject.endDate}
        description={experienceObject.description}
        key={i}
        >
      </ExperienceItem>)
    }
  </div>
);

export default Experience;
