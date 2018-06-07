import React from 'react';
import EducationItem from './EducationItem.js';
import educationData from '../data/education-data.json';

const Education = () => (
  <section className="education-info">
    <header>Education</header>
    {
      educationData.map(({degree, school, startDate, endDate}, i) =>
      <EducationItem
        degree={degree}
        school={school}
        startDate={startDate}
        endDate={endDate}
        key={i}
        >
      </EducationItem>)
    }
  </section>
);

export default Education;
