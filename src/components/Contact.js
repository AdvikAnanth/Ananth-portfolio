import React from 'react';

const Contact = () => {
  return (
    <section className="relative flex flex-col items-center ag-primary px-5 md:px-20 py-10" id='contacts'>
      <div className="w-full max-w-6xl h-1/3 bg-gray-800 p-6 rounded-lg">
        <h1 className="text-white text-2xl font-bold mb-4 text-center">Contact Me</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-white mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 bg-gray-900 rounded-lg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-900 rounded-lg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full p-2 bg-gray-900 rounded-lg text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              rows="3"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 rounded-lg text-white font-bold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
