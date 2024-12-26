import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ContactDetails from '../components/ContactDetails';
import ContactForm from '../components/ContactForm';
import { useContacts } from '../hooks/useContacts';

const HomePage: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(true);
  const { deleteMutation } = useContacts();

  return (
    <div className="flex w-full">
      <Sidebar onSelect={setSelectedContact} />
      <div className="flex-grow p-6">
        {isEditing ? (
          <ContactForm
            contact={selectedContact}
            onSave={() => setIsEditing(false)}
          />
        ) : selectedContact ? (
          <ContactDetails
            contact={selectedContact}
            onEdit={() => setIsEditing(true)}
            onDelete={() => deleteMutation.mutate(selectedContact.id)}
          />
        ) : (
          <div className="text-gray-500">Select a contact to view details</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
