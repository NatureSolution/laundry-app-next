"use client";
import React, { useState, useEffect } from 'react';

export default function contactPage() {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Initial state might be different on server and client, 
    // reconcile to prevent hydration mismatches
    setMessage(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    // Log the values to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    event.target.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            // onClick={()=> handelSubmit()}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
