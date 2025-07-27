import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i4jydox',   // From EmailJS dashboard
      'template_jqkxmwe',  // From EmailJS dashboard
      form.current,
      'E1MTFF9h4FiPOyZM1'    // From EmailJS account settings
    ).then(
      (result) => {
        alert('Message Sent ✅');
        form.current.reset();
      },
      (error) => {
        alert('Oops! Something went wrong ❌');
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
  <input
    type="text"
    name="title"
    placeholder="Subject"
    required
    className="w-full p-3 rounded bg-gray-800 text-white"
  />
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-3 rounded bg-gray-800 text-white"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full p-3 rounded bg-gray-800 text-white"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
    rows="6"
    className="w-full p-3 rounded bg-gray-800 text-white"
  ></textarea>
  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
  >
    Send Message
  </button>
</form>

  );
};

export default ContactSection;
