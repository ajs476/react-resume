import React from 'react';
import Career from './Career.js';
import Experience from './Experience.js';

const LeftSide = () => (
  <section className="left-side">
    <Career />
    <div className="heading">
      <h2>
        <i className="fas fa-check-circle"></i>Experience
      </h2>
    </div>
    <Experience />
  </section>
);

export default LeftSide;
