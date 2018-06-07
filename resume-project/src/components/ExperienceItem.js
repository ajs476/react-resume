import React from 'react';


const ExperienceItem = ({title, company, city, startDate, endDate, description}) => (
  <div>
    <section className="experience-heading">
      <h2 hidden="hidden">Experience Information</h2>
      <div className="exp-position-location">
        <h3>{title}</h3>
        <h4>{company}, {city}</h4>
      </div>
      <div className="exp-date">
        <h4>{startDate} - {endDate}</h4>
      </div>
    </section>
    <section className="content">
      <h2 hidden="hidden">{title} Experience Information</h2>
      <p>
        {description}
      </p>
    </section>
  </div>
);

export default ExperienceItem;
