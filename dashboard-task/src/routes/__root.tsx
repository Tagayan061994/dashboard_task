import React from 'react';
import { Outlet } from '@tanstack/react-router';

const Root: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Add a header or navbar here if needed */}
      <header className="bg-blue-500 text-white p-4 text-center">Contact Management</header>
      <main className="flex-grow flex">
        <Outlet /> {/* Renders child routes */}
      </main>
      {/* Add a footer here if needed */}
    </div>
  );
};

export default Root;
