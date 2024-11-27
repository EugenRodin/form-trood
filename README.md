
# Project: User Profile SPA

## Overview
This project is a Single Page Application (SPA) designed for displaying and editing user profile data in a personal account. The application is built with React and TypeScript, adhering to modern development practices.

## Features
- **Profile Management**:
  - Display user profile data: Name, Surname, Position, Phone, Address, Interests (tags), Profile Link, Avatar, and Profile Visibility.
  - Edit profile data in real-time.
  - Upload and preview avatar images in `.jpg`, `.jpeg`, or `.png` formats.
  - Save profile data to `localStorage` to persist changes across sessions.
  - Cancel profile changes and revert to the last saved state.
  - Validate profile fields for correctness (e.g., Name, Phone, URL).

- **Additional Pages**:
  - Registration and Login with validation using `Formik` and `Yup`.
  - Forgot Password and Set Password flows.
  - Dashboard for navigation and additional content.

- **Components**:
  - Dropdown menu for enhanced user interaction.
  - Reusable and modular design for maintainability.

## Tech Stack
- React (with Hooks)
- TypeScript
- Formik for forms
- Yup for validation
- CSS for styling

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the application in your browser at `http://localhost:3000`.


