# 🚀 S30 Laravel + ReactJS Test 2022.04

Welcome to the **S30 Laravel + ReactJS Test 2022.04** project!  
This full-stack application demonstrates how to manage users with multiple roles using **Laravel 8** for the backend and **React 17** for the frontend.  

The app allows creating users with full names, emails, and multiple roles, as well as viewing filtered user lists.  

---

## ✨ Features
- Create users with **Full Name**, **Email**, and **Multiple Roles** (Author, Editor, Subscriber, Administrator).
- Save user data via **Laravel API endpoints**.
- Fetch and display users filtered by roles.
- Validation:
  - **Email**: required, unique, valid format.
  - **Full Name**: required.
  - **Role**: required.
- Optional: Use **Laravel Sail** to serve the backend.
- Frontend built with **React (hooks + functional components)**.
- API communication handled with **Axios**.
- **Bonus**: Typescript implementation for improved type safety.

---

## 📋 Prerequisites

### Backend
- PHP >= 8.2  
- Composer  
- Docker (optional, for Laravel Sail)  
- Laravel 8 installed  

### Frontend
- Node.js >= 17.x  
- npm or yarn  

---

## 🛠️ Installation

### Clone the Repository
```bash
git clone <REPO_LINK>
cd <REPO_DIRECTORY>

⚙️ Backend Setup

# Copy environment file
cp .env.example .env

# Generate app key
./vendor/bin/sail artisan key:generate

# Build and run containers
./vendor/bin/sail up -d

# Run migrations
./vendor/bin/sail artisan migrate

Without Sail

Make sure PHP, Composer, and your database are installed and configured, then run:

composer install
php artisan migrate
php artisan serve

🎯 Frontend Setup
cd frontend
npm install
npm start

Your app will be available at 👉 http://localhost:3000

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

Upon success, you’ll be redirected to the Users List page.

Viewing Users

The Users List page displays all users.

You can filter by roles to view users associated with a specific role.

📁 Project Structure
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

