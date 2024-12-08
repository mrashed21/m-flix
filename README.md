# Movie Portal [M-Flix]

## Live Site
You can view the live application here: [Movie Portal Live](https://m-flix.netlify.app/)

## Project Overview
The **Movie Portal** is a dynamic, user-friendly platform designed for movie enthusiasts. It allows users to explore, add, update, delete  and add to favorite movies. The application offers features such as adding movies to favorites, viewing detailed movie information, and deleting movies from the favorites list. It is built using React, Firebase authentication, and various UI/UX tools like Tailwind CSS, DaisyUI, and SweetAlert.

## Key Features
- **User Authentication**: Users can log in or register using Firebase authentication, including Google sign-in.
- **Movie Management**: Users can add movies to their favorites, view movie details, and delete movies from the favorites list.
- **Responsive Design**: Fully responsive layout, ensuring a smooth experience on mobile, tablet, and desktop.
- **Movie Search**: Search functionality to filter movies based on the title.
- **Dark/Light Theme**: Toggle between light and dark themes for enhanced usability.

## Tech Stack
- **Frontend**: React, React Router, React-Helmet-Async, React-Icons, Tailwind CSS, DaisyUI, SweetAlert, React Toastify, React Rating Stars Component, Swiper.
- **Backend**: Firebase for authentication, MongoDB for data storage (movie details, user favorites).
- **Development Tools**: Vite for development server, ESLint for linting, and React Hook Form for form handling.

## Features & Functionalities
1. **Login & Registration**: 
   - Users can log in or register with email and password or through Google.
   - Password validation ensures a secure password during registration.
   
2. **Movie Listing**:
   - Displays a list of movies, including posters, titles, genre, duration, release year, and rating.
   - Users can click on "See Details" to view more information about a movie.
   
3. **Movie Details**:
   - Users can view detailed information about the movie, including a button to add the movie to their favorites or delete it.
   
4. **Favorite Movies**:
   - Users can view their favorite movies in a 3-column grid layout.
   - Each movie includes options to view the details or delete it from favorites.

5. **Movie Addition**:
   - Users can add new movies through a form that includes validation for fields like movie poster, title, genre, duration, rating, and summary.

6. **Dark/Light Mode Toggle**:
   - A simple theme toggle to switch between dark and light modes, improving accessibility and user experience.
