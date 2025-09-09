S30 Laravel + ReactJS Test 2022.04
Welcome to the S30 Laravel + ReactJS Test 2022.04 project! This full-stack application demonstrates how to manage users with multiple roles using Laravel 8 for the backend and React 17 for the frontend. The application allows creating users with full names, emails, and multiple roles, as well as viewing filtered user lists.

🚀 Table of Contents
Features
Prerequisites
Installation
Configuration
Running the Application
Usage
Project Structure
Notes
License
✨ Features
Create users with full name, email, and multiple roles (Author, Editor, Subscriber, Administrator).
Save user data via Laravel API endpoints.
Fetch and display users filtered by roles.
Validation:
Email: required, unique, valid format.
Full Name: required.
Role: required.
Optional: Use Laravel Sail to serve the backend.
Frontend built with React using hooks and functional components.
API communication handled with Axios.
Bonus: Typescript implementation for improved type safety.
📋 Prerequisites
Backend
PHP >= 7.4
Composer
Docker (optional, for Laravel Sail)
Laravel 8 installed
Frontend
Node.js >= 14.x
npm or yarn
🛠️ Installation
Clone the repository
CopyRun
git clone <REPO_LINK>
cd <REPO_DIRECTORY>
⚙️ Backend Setup
Using Laravel Sail (recommended)
Copy the environment file:
CopyRun
cp .env.example .env
Generate application key:
CopyRun
./vendor/bin/sail artisan key:generate
Build and run containers:
CopyRun
./vendor/bin/sail up -d
Run migrations to create database tables:
CopyRun
./vendor/bin/sail artisan migrate
Without Sail
Ensure PHP, Composer, and your database are installed and configured, then run:

CopyRun
composer install
php artisan migrate
php artisan serve
🎯 Frontend Setup
Navigate to the frontend directory:
CopyRun
cd frontend
Install dependencies:
CopyRun
npm install
Start the React development server:
CopyRun
npm start
Your app will be available at http://localhost:3000.

🔧 Configuration
Update your backend .env file with your database credentials:

CopyRun
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
Ensure all environment variables are properly set to enable Laravel to connect to your database.

🚀 Usage
Adding Users
Open the frontend page with input fields for Full Name, Email, and Roles.
Fill out the form and click Submit.
Upon successful submission, you'll be redirected to the Users List page.
Viewing Users
The Users List page displays all users, with options to filter by roles.
Select a role to see users associated with that role.
📁 Project Structure
CopyRun
/backend
  ├── /app
  ├── /routes
  ├── /database/migrations
  └── ... (other Laravel folders)

/frontend
  ├── /src
      ├── /components
      ├── App.tsx
      └── ... (other React files)
