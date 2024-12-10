'use client';

import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-blue-600">Contact Me</h1>
        <p className="mt-4 text-gray-700">Feel free to reach out to me using the form below!</p>
        <form
          action="mailto:your-email@example.com"
          method="POST"
          className="mt-6 space-y-4"
        >
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
