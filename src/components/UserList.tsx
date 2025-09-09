import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  full_name: string;
  email: string;
  roles: string[];
}

interface UserListProps {
  onSwitchPage: () => void;
}

const API_BASE_URL = 'http://localhost:8000/api';

const UserList: React.FC<UserListProps> = ({ onSwitchPage }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Users</h2>
      <button
        onClick={fetchUsers}
        className="w-full py-2 px-4 rounded-md font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 mb-4"
      >
        {loading ? 'Loading...' : 'Refresh Users'}
      </button>
      <ul className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
              <div className="font-medium text-gray-900">{user.full_name}</div>
              <div className="text-sm text-gray-600">Email: {user.email}</div>
              <div className="text-sm text-gray-600">Roles: {user.roles.join(', ')}</div>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No users found. Click 'Refresh Users' to fetch them.</li>
        )}
      </ul>
      <div className="mt-4">
        <button
          onClick={onSwitchPage}
          className="w-full py-2 px-4 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
        >
          Back to Create User
        </button>
      </div>
    </div>
  );
};

export default UserList;