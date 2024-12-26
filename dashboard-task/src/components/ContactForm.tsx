import React from 'react';
import { createFormStore } from '@tanstack/react-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  username: z.string().min(1, 'Username is required'),
  description: z.string().optional(),
});

interface ContactFormProps {
  contact?: any;
  onSave: (data: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onSave }) => {
  const formStore = createFormStore({
    defaultValues: contact || {
      name: '',
      email: '',
      username: '',
      description: '',
    },
    onSubmit: (data) => {
      // Zod validation
      const validation = schema.safeParse(data);
      if (!validation.success) {
        console.error(validation.error);
        return;
      }
      onSave(validation.data);
    },
  });

  const { formState, setFieldValue } = formStore;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formStore.submit();
      }}
      className="space-y-4 bg-white p-6 rounded shadow-md"
    >
      <div>
        <label>Name</label>
        <input
          value={formState.values.name}
          onChange={(e) => setFieldValue('name', e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        {formState.errors.name && <p className="text-red-500">{formState.errors.name}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          value={formState.values.email}
          onChange={(e) => setFieldValue('email', e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {formState.errors.email && <p className="text-red-500">{formState.errors.email}</p>}
      </div>

      <div>
        <label>Username</label>
        <input
          value={formState.values.username}
          onChange={(e) => setFieldValue('username', e.target.value)}
          placeholder="Username"
          className="w-full p-2 border rounded"
        />
        {formState.errors.username && (
          <p className="text-red-500">{formState.errors.username}</p>
        )}
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={formState.values.description}
          onChange={(e) => setFieldValue('description', e.target.value)}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Save
      </button>
    </form>
  );
};

export default ContactForm;
