import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-20 bg-gray-100">
      <h2 className="text-4xl text-center mb-10">Contact</h2>
      <div className="container mx-auto">
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
