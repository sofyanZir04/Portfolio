import React from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedinIn} from "react-icons/fa";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_h8w7vqn', 'template_1rnuddr', e.target,  'Gy6YCCxXOGstjdLP0'
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });

    e.target.reset();
  };

  return (
    <div className="sm:mx-8 text-xl font-mono h-full sm:border-2 border-black my-3">
      <div className="p-8 my-4 text-4xl text-center">
        <h2 className="font-mono font-black">Contact Us</h2>
      </div>
      <div className=" flex flex-col sm:flex-row justify-center">
          <div className="mx-auto md:mx-44 float-right w-1/3 ">
          <form onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-black hover:bg-white hover:text-black border-black border-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          </div>
          <div className="float-left w-1/3 h-screen pl-28 py-5">
            <h2>SOFYANE AIT OZOUMAR</h2>
            <a href='https://www.linkedin.com/in/sofyane-ait-ozoumar/'><FaLinkedinIn></FaLinkedinIn></a>
            <a href='https://www.linkedin.com/in/sofyane-ait-ozoumar/'><FaLinkedinIn></FaLinkedinIn></a>
            <a href='https://www.linkedin.com/in/sofyane-ait-ozoumar/'><FaLinkedinIn></FaLinkedinIn></a>
          </div>
      </div>
      
    </div>
  );
};

export default Contact;


// 
// import { MdEmail } from "react-icons/md";
// import Fade from 'react-reveal/Fade';

