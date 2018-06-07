import React from 'react';

const EducationItem = ({degree, school, startDate, endDate}) => (
  <div>
    <h3>{degree}</h3>
    <h4>{school}</h4>
    <h4>{startDate} - {endDate}</h4>
  </div>
);

export default EducationItem;
