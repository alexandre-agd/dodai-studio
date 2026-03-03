import React from 'react';

export const ContactForm: React.FC<{ isRunPage?: boolean }> = ({ isRunPage }) => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};
