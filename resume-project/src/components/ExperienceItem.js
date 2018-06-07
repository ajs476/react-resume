import React from 'react';


const ExperienceItem = (props) => (
  <div>
    <section className="experience-heading">
      <h2 hidden="hidden">Experience Information</h2>
      <div className="exp-position-location">
        <h3>{props.title}</h3>
        <h4>{props.company}, {props.city}</h4>
      </div>
      <div className="exp-date">
        <h4>{props.startDate} - {props.endDate}</h4>
      </div>
    </section>
    <section className="content">
      <h2 hidden="hidden">{props.title} Experience Information</h2>
      <p>
        {props.description}
      </p>
    </section>
  </div>
);

export default ExperienceItem;
