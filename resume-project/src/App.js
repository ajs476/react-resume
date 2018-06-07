import React from 'react';
import {LeftSide} from './components/LeftSide.js';
import {RightSide} from './components/RightSide.js';


const App = () => (
  <div>
    <section className="container">
      <LeftSide />
      <RightSide />
    </section>
</div>
);

export default App;
