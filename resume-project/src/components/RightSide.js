import React from 'react';
import {Personal} from './Personal.js';
import {Contact} from './Contact.js';
import {Education} from './Education.js';

const RightSide = () => (
  <section className="right-side">
      <Personal />
      <Contact />
      <Education />
  </section>
);

export {RightSide};
