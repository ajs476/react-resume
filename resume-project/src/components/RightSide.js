import React from 'react';
//import {} from './.js';
//import {} from './.js';

const RightSide = () => (
  <section className="right-side">
    <h2 hidden="hidden">Personal Information</h2>
    <section className="personal-info">
      <img src="https://avatars0.githubusercontent.com/u/10605678?s=460&v=4" alt="image of Alex Sears"></img>
      <h2>Alex Sears</h2>
      <h3>Apprentice Web Developer</h3>
    </section>
    <section className="contact-info">
      <h3>
        <i className="fas fa-envelope"></i>
        <a href="mailto:ajs476@nau.edu">ajs476@nau.edu</a>
      </h3>
      <h3>
        <i className="fas fa-phone"></i>
        <a href="tel:6025555555">602-555-5555</a>
      </h3>
      <h3>
        <i className="fas fa-globe"></i>portfoliosite404.com</h3>
      <h3>
        <i className="fab fa-linkedin-in"></i>
        <a href="https://www.linkedin.com/in/alexander-sears-7379a6a5/">linkedIn Profile</a>
      </h3>
      <h3>
        <i className="fab fa-github"></i>
        <a href="https://www.github.com/ajs476">github.com/ajs476</a>
      </h3>
      <h3>
        <i className="fab fa-twitter"></i>
        <a href="https://www.twitter.com">@twittername</a>
      </h3>
    </section>
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
