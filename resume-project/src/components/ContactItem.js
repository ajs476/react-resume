import React from 'react';

const ContactItem = (props) => (
  <h3>
    <i className={`${props.iconName}`}></i>
    <a href={`${props.linkAction}${props.linkTarget}`}>{props.linkName}</a>
  </h3>
);

export default ContactItem;
