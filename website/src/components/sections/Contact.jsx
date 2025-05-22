import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ContactItem } from '../common/ContactItem';
import { contactInfo } from '../../data/socialLinks';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 min-h-screen flex items-center bg-gray-900 bg-opacity-60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!"
        />

        <div className="max-w-2xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-2xl">
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <ContactItem 
                key={index}
                type={item.type}
                value={item.value}
                url={item.url}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};