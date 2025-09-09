S30 Laravel + ReactJS Test 2022.04
This project is a full-stack application built with Laravel 8 (backend) and React 17 (frontend) that allows users to be created with multiple roles, and to view users filtered by roles.

Table of Contents
Features
Prerequisites
Installation
Configuration
Running the Application
Usage
Project Structure
Notes
License
Features
Create users with full name, email, and multiple roles (Author, Editor, Subscriber, Administrator).
Save user data via Laravel API endpoint.
Fetch and display users filtered by roles.
Validation:
Email: required, unique, valid format.
Full Name: required.
Role: required.
Optional: Use Laravel Sail for serving the backend.
Frontend built with React using hooks and functional components.
Axios used for API communication.
(Bonus) Typescript implementation.
Prerequisites
Backend
PHP >= 7.4
Composer
Docker (for Laravel Sail, optional)
Laravel 8 installed
Frontend
Node.js >= 14.x
npm or yarn
Installation
Clone the repository
CopyRun
git clone <REPO_LINK>
cd <REPO_DIRECTORY>
Backend Setup
Using Laravel Sail (recommended)
Copy the .env.example to .env:
CopyRun
cp .env.example .env
Generate application key:
CopyRun
./vendor/bin/sail artisan key:generate
Run Sail to build and start containers:
CopyRun
./vendor/bin/sail up -d
Run migrations to create the database tables:
CopyRun
./vendor/bin/sail artisan migrate
Without Sail
Ensure PHP, Composer, and a database are installed and configured, then run:

CopyRun
composer install
php artisan migrate
php artisan serve
Frontend Setup
Navigate to the React folder (assuming it's in frontend):
CopyRun
cd frontend
Install dependencies:
CopyRun
npm install
Start the React development server:
CopyRun
npm start
The frontend will typically be available at http://localhost:3000.

Configuration
Environment Variables
Update your backend .env file with your database credentials and other necessary config.

Example:

CopyRun
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
Ensure your .env variables are correctly set to allow Laravel to connect to your database.

Usage
Adding Users
Open the frontend page with input fields for Full Name, Email, and Roles.
Fill in the form and submit.
Upon successful submission, you'll be redirected to the Users List page.
Viewing Users
The Users List page displays users, optionally filtered by roles.
You can view users according to selected roles.
Project Structure
CopyRun
/backend
  /app
  /routes
  /database/migrations
  ...
/frontend
  /src
    /components
    App.tsx
    ...
