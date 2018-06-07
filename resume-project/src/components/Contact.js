import React from 'react';
import ContactItem from './ContactItem.js';
import contactData from '../data/contact-data.json';

const Contact = () => (
  <section className="contact-info">
    {
      contactData.map((contactObject, i) =>
      <ContactItem
        iconName={contactObject.iconName}
        linkAction={contactObject.linkAction}
        linkTarget={contactObject.linkTarget}
        linkName={contactObject.linkName}
        key={i}
        >
      </ContactItem>)
    }
  </section>
);

export default Contact;
