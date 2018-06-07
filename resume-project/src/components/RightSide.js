import React from 'react';
import {Personal} from './Personal.js';
import {Contact} from './Contact.js';

const RightSide = () => (
    <section className="right-side">
      <Personal />
      <Contact />
      <section className="education-info">
        <header>Education</header>
        <h3>BSc in Applied Computer Science</h3>
        <h4>Northern Arizona University</h4>
        <h4>2012-2017</h4>
        <h3>Associates of Arts</h3>
        <h4>Glendale Community College</h4>
        <h4>2010-2012</h4>
      </section>
  </section>
);

export {RightSide};
