"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="max-w-4xl w-full mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <footer className="mt-10">
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/urena-miguel82"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <svg
                className="w-8 h-8 text-gray-600 hover:text-gray-800"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.45C0 23.2.79 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.77V1.77C24 .8 23.2 0 22.23 0zM7.09 20.45H3.54V9h3.55v11.45zm-1.77-13h-.02c-1.19 0-1.96-.82-1.96-1.85 0-1.04.79-1.85 2-1.85s1.96.82 1.98 1.85c.01 1.03-.77 1.85-2 1.85zM20.45 20.45h-3.54v-5.98c0-1.5-.54-2.52-1.88-2.52-1.03 0-1.64.69-1.91 1.35-.1.23-.13.54-.13.85v6.3h-3.54s.05-10.23 0-11.27h3.54v1.6c.47-.73 1.31-1.77 3.19-1.77 2.33 0 4.08 1.52 4.08 4.8v6.64z" />
              </svg>
            </a>
          </Link>
          <Link href="https://github.com/tatsuyax25" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <svg
                className="w-8 h-8 text-gray-600 hover:text-gray-800"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.93.57.1.77-.25.77-.55 0-.27-.01-1.12-.01-2.03-3.19.69-3.86-1.34-3.86-1.34-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.69 1.26 3.35.97.1-.74.4-1.26.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.44.11-3 0 0 .97-.31 3.18 1.19.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.5 3.18-1.19 3.18-1.19.62 1.56.23 2.71.11 3 .73.81 1.18 1.85 1.18 3.11 0 4.45-2.69 5.41-5.25 5.69.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.13 0 .3.2.66.78.55C20.7 21.39 24 17.08 24 12c0-6.27-5.23-11.5-11.5-11.5z" />
              </svg>
            </a>
          </Link>
        </div>
      </footer>
    </main>
  );
}