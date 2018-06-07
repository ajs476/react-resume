import React from 'react';
import careerData from '../data/career-data.json';

const Career = () => (
  <div>
    <div className="heading">
      <h2>
        <i className="fas fa-user-circle"></i>Career Profile</h2>
    </div>
    <section className="content">
      <h2 hidden="hidden">Career Information</h2>
      <p>
        {careerData.description}
      </p>
    </section>
  </div>
);

export default Career;
