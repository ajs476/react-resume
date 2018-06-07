import React from 'react';

const ContactItem = ({iconName, linkAction, linkTarget, linkName}) => (
  <h3>
    <i className={`${iconName}`}></i>
    <a href={`${linkAction}${linkTarget}`}>{linkName}</a>
  </h3>
);

export default ContactItem;
