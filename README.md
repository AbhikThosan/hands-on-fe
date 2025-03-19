# [HandsOn](https://hands-on-fe.vercel.app/) - Community-Driven Social Volunteering Platform (Frontend)

## 📌 1. Project Overview

HandsOn is a backend service for a community-driven social volunteering platform that connects individuals with meaningful social impact opportunities. It provides APIs for users to register, manage profiles, create and join volunteer events, post community help requests, form teams for collaborative initiatives, and track contributions. Designed as a "GitHub for social work" backend, HandsOn supports social responsibility and collaboration by rewarding participants with points and enabling recognition features.

## 🛠 Technologies Used

- **React.js**: Frontend framework
- **Redux Toolkit**: State management
- **RTK Query**: API communication and caching
- **Ant Design**: UI components
- **Tailwind CSS**: Styling
- **React Router**: Routing
- **react-hot-toast**: Notifications

## 📌 3. Features

- **User Registration & Profile Management:**
  - Sign up and log in with email and password via API.
  - Update profiles with skills, causes supported, and personal details.
  - Retrieve volunteer history, hours, and contribution points.
- **Volunteer Events:**
  - Create events with title, description, date, time, location, and category.
  - Browse and filter events by category, location, or date.
  - Join events via API with instant attendee updates.
- **Community Help Requests:**
  - Post help requests with title, description, location, category, and urgency level (low, medium, urgent).
  - Add comments to coordinate or offer assistance.
  - Update request status (open, in_progress, completed, closed).
- **Teams & Group Initiatives:**
  - Form public (open to all) or private (invite-only) teams.
  - Access team dashboards with members, events, and achievements.
  - View a leaderboard of top-performing teams based on achievement points.

## 📂 Project Structure

Below is the **flowchart-style structure** of the frontend:

src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│ ├── layout/
│ │ ├── Navbar.jsx
│ │ ├── AppLayout.jsx
│ │ └── AppFooter.jsx
│ ├── card/
│ │ └── EventPostCard.jsx
│ ├── filter/
│ │ └── EventPostFilters.jsx
│ ├── list/
│ │ └── EventPostList.jsx
│ └── pagination/
│ └── PaginationControls.jsx
├── features/
│ ├── auth/
│ │ ├── login/
│ │ │ ├── api/
│ │ │ │ └── loginApi.js
│ │ │ ├── components/
│ │ │ │ ├── LoginForm.jsx
│ │ │ │ └── LoginFormInputs.jsx
│ │ │ └── constant/
│ │ │ └── loginForm.const.js
│ │ ├── registration/
│ │ │ ├── api/
│ │ │ │ └── registrationApi.js
│ │ │ ├── components/
│ │ │ │ ├── RegistrationForm.jsx
│ │ │ │ └── RegistrationFormInputs.jsx
│ │ │ └── constant/
│ │ │ └── registrationForm.const.js
│ │ ├── slice/
│ │ │ └── authSlice.js
│ │ └── hook/
│ │ └── useAuthApi.js
│ ├── events/
│ │ ├── api/
│ │ │ ├── createEventApi.js
│ │ │ ├── eventsApi.js
│ │ │ └── joinEventApi.js
│ │ ├── components/
│ │ │ ├── CreateEventDrawer.jsx
│ │ │ ├── CreateEventForm.jsx
│ │ │ └── CreateEventFormInputs.jsx
│ │ ├── constant/
│ │ │ └── createEventForm.const.js
│ │ └── hook/
│ │ └── useEvents.js
│ ├── community-help-posts/
│ │ ├── api/
│ │ │ ├── communityHelpApi.js
│ │ │ ├── communityHelpPostsApi.js
│ │ │ └── createCommunityHelpPostApi.js
│ │ ├── components/
│ │ │ ├── CreateCommunityHelpPostDrawer.jsx
│ │ │ ├── CreateCommunityHelpPostForm.jsx
│ │ │ └── CreateCommunityHelpPostFormInputs.jsx
│ │ ├── constant/
│ │ │ └── createCommunityHelpPostForm.const.js
│ │ └── hook/
│ │ └── useCommunityHelp.js
│ ├── teams/
│ │ ├── api/
│ │ │ ├── createTeamApi.js
│ │ │ ├── joinTeamApi.js
│ │ │ ├── publicTeamsApi.js
│ │ │ └── teamDashboardApi.js
│ │ ├── components/
│ │ │ ├── CreateTeamDrawer.jsx
│ │ │ ├── CreateTeamsForm.jsx
│ │ │ └── TeamCard.jsx
│ │ ├── constant/
│ │ │ └── createTeamForm.const.js
│ │ └── hook/
│ │ └── usePublicTeams.js
│ └── user-profile/
│ ├── api/
│ │ └── userProfileApi.js
│ ├── components/
│ │ ├── EditUserProfileDrawer.jsx
│ │ ├── EditUserProfileForm.jsx
│ │ └── EditUserProfileFormInput.jsx
│ ├── constant/
│ │ └── editUserProfileForm.const.js
│ └── hook/
│ └── useUserProfile.js
├── pages/
│ ├── home/
│ │ └── HomePage.jsx
│ ├── auth/
│ │ ├── login/
│ │ │ └── LoginPage.jsx
│ │ └── registration/
│ │ └── RegistrationPage.jsx
│ ├── events/
│ │ └── EventsPage.jsx
│ ├── community-help/
│ │ └── CommunityHelpPage.jsx
│ ├── profile/
│ │ └── ProfilePage.jsx
│ └── teams/
│ └── TeamsPage.jsx
├── services/
│ └── apiSlice.js
└── store/
└── store.js

---

## 🔧 Setup Instructions

1. **Clone the Repository**
   sh
   git clone https://github.com/AbhikThosan/hands-on-fe.git
   cd hands-on-frontend

2. **Install Dependencies**
   sh
   npm install

3. **Run the Development Server**
   sh
   npm run dev

4. **Build for Production**
   sh
   npm run build

---

## 🚀 Running the Project

1. Start the development server:
   sh
   npm run dev

2. Open the app in your browser at `http://localhost:5173`.
