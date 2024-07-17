// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to your server here
    setFormSubmitted(true);
    formData && console.log(formData);
  };
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl text-center font-bold mb-6">Contact Us</h2>
        {formSubmitted ? (
          <p className="text-center text-green-500">
            Thank you for contacting us! We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
