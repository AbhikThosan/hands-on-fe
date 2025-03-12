# HandsOn - Frontend

## 🚀 Project Overview

HandsOn is a **community-driven social volunteering platform** that connects individuals with meaningful social impact opportunities. Users can:

- Discover and join volunteer events.
- Post and respond to community help requests.
- Form teams to organize long-term initiatives.
- Track and showcase their contributions.

The frontend is built with **React.js** and **Tailwind CSS**, providing a seamless user experience.

## 🛠 Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling framework
- **Redux Toolkit** - State management
- **React Router** - Navigation management
- **Axios** - API requests

## 🎯 Features

- **User Authentication**: Secure login and registration using JWT.
- **Profile Management**: Edit profile, view volunteer history, and manage contributions.
- **Event Listing & Filtering**: Browse and filter events based on categories, location, and availability.
- **Community Help Requests**: Post and respond to ongoing social impact initiatives.
- **Team Collaboration**: Create and manage teams for larger initiatives.
- **Impact Tracking**: Log volunteer hours and earn recognition through a points-based system.

## 📂 Project Structure

```
/src
│── components/        # Reusable UI components
│── pages/             # Main application pages
│── features/          # Redux slices and business logic
│── api/               # API calls using Axios
│── hooks/             # Custom React hooks
│── utils/             # Utility functions
│── assets/            # Static assets (images, icons, etc.)
│── App.js             # Main application component
│── index.js           # Entry point
```

## 🔧 Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/hands-on-frontend.git
   cd hands-on-frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file and configure environment variables:**
   ```sh
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. **Run the development server:**
   ```sh
   npm start
   ```

## 🔌 API Endpoints

The frontend interacts with the backend via REST API. Some key endpoints include:

- `POST /api/auth/register` – User registration
- `POST /api/auth/login` – User login
- `GET /api/events` – Fetch all events
- `POST /api/events` – Create a new event
- `GET /api/help-requests` – Fetch community help requests

(For a complete list, refer to the [Backend Documentation](#))

## 🚀 Deployment

To deploy the frontend to Vercel or Netlify:

```sh
npm run build
```

Then, follow the respective platform's deployment process.

## 📜 License

This project is licensed under the MIT License.
