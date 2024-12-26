import React, { useState } from 'react';
import { useContacts } from '../hooks/useContacts';

const Sidebar: React.FC<{ onSelect: (contact: any) => void }> = ({ onSelect }) => {
  const { contactsQuery } = useContacts();
  const [search, setSearch] = useState('');

  const filteredContacts = contactsQuery.data?.filter((contact: any) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search contacts..."
        className="w-full p-2 border rounded mb-4"
      />
      <ul>
        {filteredContacts?.map((contact: any) => (
          <li
            key={contact.id}
            onClick={() => onSelect(contact)}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded"
          >
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
