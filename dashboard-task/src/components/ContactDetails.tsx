import React from 'react';

const ContactDetails: React.FC<{
  contact: any;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ contact, onEdit, onDelete }) => {
  if (!contact) return null;

  return (
    <div className="p-6 bg-white shadow-md rounded">
      <img
        src={contact.profilePicture || 'https://via.placeholder.com/100'}
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{contact.name}</h2>
      <p>{contact.username}</p>
      <p>{contact.email}</p>
      <p>{contact.description}</p>
      <div className="mt-4 space-x-2">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
