import React from 'react';
import ContactItem from './ContactItem.js';
import contactData from '../data/contact-data.json';

const Contact = () => (
  <section className="contact-info">
    {
      contactData.map(({iconName, linkAction, linkTarget, linkName}, i) =>
      <ContactItem
        iconName={iconName}
        linkAction={linkAction}
        linkTarget={linkTarget}
        linkName={linkName}
        key={i}
        >
      </ContactItem>)
    }
  </section>
);

export default Contact;
