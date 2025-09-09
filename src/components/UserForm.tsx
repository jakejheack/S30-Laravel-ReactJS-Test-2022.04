import React, { useState } from 'react';
import axios from 'axios';

interface UserFormProps {
  onSwitchPage: () => void;
}

const API_BASE_URL = 'http://localhost:8000/api';

const UserForm: React.FC<UserFormProps> = ({ onSwitchPage }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    roles: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRolesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData((prev) => ({
      ...prev,
      roles: selectedOptions,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!formData.full_name || !formData.email || formData.roles.length === 0) {
      setError('All fields are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/users`, formData);
      console.log('User created:', response.data);
      setFormData({ full_name: '', email: '', roles: [] });
      onSwitchPage(); // Switch to list after creation
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 422) {
        const errors = err.response.data.errors;
        const errorMessages = Object.values(errors).flat().join(' ');
        setError(`Validation Error: ${errorMessages}`);
      } else {
        setError('Error submitting form. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Create New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Jwaak Rodriguez Jardinel"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="jhaakjardinel111@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="roles" className="block text-sm font-medium text-gray-700 mb-1">
            Roles (select multiple)
          </label>
          <select
            id="roles"
            name="roles"
            multiple
            value={formData.roles}
            onChange={handleRolesChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="Author">Author</option>
            <option value="Editor">Editor</option>
            <option value="Subscriber">Subscriber</option>
            <option value="Administrator">Administrator</option>
          </select>
        </div>
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors duration-200 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;