import React from 'react';

const App = () => (<div>
  <body>
    <section classNameName="container">
      <section id="left-side">
        <div classNameName="heading">
          <h2>
            <i className="fas fa-user-circle"></i>Career Profile</h2>
        </div>
        <section className="content">
          <h2 hidden="hidden">Career Information</h2>
          <p>
            After graduating from Northern Arizona University with a Bachelors
            in Applied Computer Science I moved to Austin, Texas looking to begin
            my career in software development. While searching for work I spent
            a few months developing the mobile game Pazaak Cantina. I then was
            accepted into the apprenticeship program at the software development
            company Moove-it, located in downtown Austin. I am hopeful that I will
            begin working as a full-time developer with Moove-it after finishing the apprenticeship.
          </p>
        </section>
        <div className="heading">
          <h2>
            <i className="fas fa-check-circle"></i>Experience</h2>
        </div>
        <section className="experience-heading">
          <h2 hidden="hidden">Work Experience Information</h2>
          <div className="exp-position-location">
            <h3>Apprentice Web Developer</h3>
            <h4>Moove-it, Austin</h4>
          </div>
          <div className="exp-date">
            <h4>2018 - Present</h4>
          </div>
        </section>
        <section className="content">
          <h2 hidden="hidden">Apprentice Experience Information</h2>
          <p>
            As an apprentice developer at Moove-it I am constantly learning new things. While currently focusing on the basics of web development using HTML and CSS, I will soon be gaining experience with modern front-end frameworks. Another the apprentices at Moove-it are doing is getting a ton of hands-on experience with Git. Although there are some struggles with git, I am continuing to get better and better using it each day.
          </p>
        </section>
        <section className="experience-heading">
          <div className="exp-position-location">
            <h3>Android Developer</h3>
            <h4>Freelance, Austin</h4>
          </div>
          <div className="exp-date">
            <h4>2015 - 2018</h4>
          </div>
        </section>
        <section className="content">
          <h2 hidden="hidden">Android Developer Experience Information</h2>
          <p>
            I developed the android-based mobile game Pazaak Cantina - The Card Game in March 2018. After publishing the game on the Google Play Store, I have received hundreds of reviews and over a thousand downloads. The overall rating of Pazaak Cantina is a 4.6/5, and I couldnt be happier with the results. I am still working on small developments for the game, but overall I consider the application to be finished.
          </p>
        </section>
      </section>
      <section id="right-side">
        <h2 hidden="hidden">Personal Information</h2>
        <section id="personal-info">
          <img src="https://avatars0.githubusercontent.com/u/10605678?s=460&v=4" alt="image of Alex Sears"></img>
          <h2>Alex Sears</h2>
          <h3>Apprentice Web Developer</h3>
        </section>
        <section id="contact-info">
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
        <section id="education-info">
          <header>Education</header>
          <h3>BSc in Applied Computer Science</h3>
          <h4>Northern Arizona University</h4>
          <h4>2012-2017</h4>
          <h3>Associates of Arts</h3>
          <h4>Glendale Community College</h4>
          <h4>2010-2012</h4>
        </section>

      </section>
    </section>
  </body>
</div>);

export default App;
