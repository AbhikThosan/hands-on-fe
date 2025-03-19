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

# Project Structure

This document outlines the frontend architecture of our application.

## Directory Structure

```
src/
├── App.jsx                     # Main application component
├── index.css                   # Global styles
├── main.jsx                    # Entry point
├── assets/                     # Images, fonts, etc.
├── components/                 # Shared UI components
│   ├── layout/                 # Layout components
│   ├── card/                   # Card components
│   ├── filter/                 # Filter components
│   ├── list/                   # List components
│   └── pagination/             # Pagination components
├── features/                   # Feature modules
│   ├── auth/                   # Authentication feature
│   ├── events/                 # Events feature
│   ├── community-help-posts/   # Community help posts feature
│   ├── teams/                  # Teams feature
│   └── user-profile/           # User profile feature
├── pages/                      # Page components
│   ├── home/                   # Home page
│   ├── auth/                   # Auth pages
│   ├── events/                 # Events page
│   ├── community-help/         # Community help page
│   ├── profile/                # Profile page
│   └── teams/                  # Teams page
├── services/                   # API services
│   └── apiSlice.js             # Core API configuration
└── store/                      # Redux store
    └── store.js                # Store configuration
```

## Detailed Structure

### Components

- **Layout**: `Navbar`, `AppLayout`, `AppFooter`
- **Card**: `EventPostCard`
- **Filter**: `EventPostFilters`
- **List**: `EventPostList`
- **Pagination**: `PaginationControls`

### Features

#### Authentication

- **Login**: API, components, and constants
- **Registration**: API, components, and constants
- **Shared**: Auth slice and hooks

#### Events

- **API**: Create, list, and join events
- **Components**: Creation forms and drawers
- **Hooks**: `useEvents`

#### Community Help Posts

- **API**: Create and list posts
- **Components**: Creation forms and drawers
- **Hooks**: `useCommunityHelp`

#### Teams

- **API**: Create, join, and list teams
- **Components**: Creation forms and team card
- **Hooks**: `usePublicTeams`

#### User Profile

- **API**: User profile management
- **Components**: Edit profile form and drawer
- **Hooks**: `useUserProfile`

### Pages

- **Home**: Main landing page
- **Auth**: Login and registration pages
- **Events**: Events listing and management
- **Community Help**: Community help posts page
- **Profile**: User profile page
- **Teams**: Teams management page

### Services & Store

- **apiSlice.js**: Core API configuration with RTK Query
- **store.js**: Redux store configuration

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
