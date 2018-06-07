import React from 'react';
import {Career} from './Career.js';
import {Experience} from './Experience.js';

const LeftSide = () => (
  <section className="left-side">
    <Career />
    <div className="heading">
      <h2>
        <i className="fas fa-check-circle"></i>Experience</h2>
    </div>
    <Experience
      title="Apprentice Web Developer"
      company="Moove-it"
      city="Austin"
      startDate="2018"
      endDate="Present"
      description= {
        'This is the description of the position. What an amazing example. This is the description of the position. What an amazing example. This is the description of the position. What an amazing example. This is the description of the position. What an amazing example.'
      }
      >
    </Experience>
    <Experience
      title="Android Developer"
      company="Freelance"
      city="Phoenix"
      startDate="2017"
      endDate="2018"
      description= {
        'This is the description of the position. What an amazing example. This is the description of the position. What an amazing example. This is the description of the position. What an amazing example. This is the description of the position. What an amazing example.'
      }
      >
    </Experience>
  </section>
);

export {LeftSide};
