/*
====================================================================================================
File: src/components/sections/Contact.jsx (Update existing)
Description: Contact section.
====================================================================================================
*/
import React from 'react';
import SectionTitle from '../common/SectionTitle';
import AnimatedCard from '../common/AnimatedCard';
import ContactLink from '../common/ContactLink'; // Updated name
import { Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolioData.jsx'; // Adjust path

// scrollToSection prop might not be needed here if all navigation is handled by header/footer
const ContactSection = ({ scrollToSection }) => {
  return (
    <section id="contact" aria-labelledby="contact-section-title" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle id="contact-section-title" title="Get In Touch" subtitle="I'm always open to new opportunities and collaborations. Let's connect!" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {CONTACT_INFO.map((item, index) => <ContactLink key={item.label} {...item} index={index} />)}
          </div>
          <AnimatedCard delay={CONTACT_INFO.length * 100} className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 border-white/5 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Create Together</h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind or just want to discuss technology and innovation? I'd love to hear from you.
            </p>
            <p className="text-gray-400 mb-8 text-sm">
              I typically respond to emails within 24-48 hours.
            </p>
            <a
              href="mailto:Dangarci956@gmail.com"
              className="mt-8 w-full py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium text-white hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Mail className="w-5 h-5" /> Start a Conversation
            </a>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;