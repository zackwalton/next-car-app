import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
  <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-2xl font-semibold mb-4">Get in touch</h1>
    <div className="mb-4">
      <label htmlFor="frm-email" className="block text-gray-700">Email</label>
      <input
        id="frm-email"
        type="email"
        name="email"
        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="email"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="frm-phone" className="block text-gray-700">Phone</label>
      <input
        id="frm-phone"
        type="text"
        name="phone"
        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="tel"
        required
      />
    </div>
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label for="frm-first" className="block text-gray-700">First Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last" className="block text-gray-700">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="frm-message" className="block text-gray-700">Message</label>
      <textarea
        id="frm-message"
        rows={6}
        name="message"
        className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-blue-500"
      ></textarea>
    </div>
    <div className="text-center">
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  );
}