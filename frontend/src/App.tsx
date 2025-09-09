import React, { useState } from 'react';
import UserForm from './components/UserForm.tsx';
import UserList from './components/UserList.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'create' | 'list'>('create');

  const handlePageChange = (page: 'create' | 'list') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">User Management App</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handlePageChange('create')}
            className={`py-2 px-4 rounded-md font-semibold ${
              currentPage === 'create'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Create New User
          </button>
          <button
            onClick={() => handlePageChange('list')}
            className={`py-2 px-4 rounded-md font-semibold ${
              currentPage === 'list'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            View All Users
          </button>
        </div>
        {currentPage === 'create' ? (
          <UserForm onSwitchPage={() => handlePageChange('list')} />
        ) : (
          <UserList onSwitchPage={() => handlePageChange('create')} />
        )}
      </div>
    </div>
  );
};

export default App;