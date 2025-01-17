# Movie Haven

## About Movie Haven
Movie Haven is a user-friendly movie portal designed to simplify the process of exploring, managing, and interacting with your favorite movies. With a dynamic user interface and robust backend functionality, this platform ensures a seamless user experience.

## Backend Features

- **Explore Movies:** Retrieve a curated collection of movies sorted by ratings, genres, and more.
- **Add Movies:** Insert new movies with detailed information such as title, genre, poster, and rating into the database.
- **Movie Details:** Fetch comprehensive details for each movie, including a summary and user ratings.
- **Favorite Movies Management:** Add movies to a favorite list and manage them with ease through the API.

## Technologies Used

### Backend
- **Express.js:** RESTful API for seamless communication between frontend and database.
- **MongoDB:** Reliable and scalable database for storing movie data.
- **Cors & Dotenv:** Secure and structured backend operations.

### Tools
- **Nodemon:** Development automation.
- **Morgan:** Logging for easier debugging.

## API Endpoints

### Movies
- `GET /movie` - Retrieve all movies with optional rating-based sorting.
- `POST /movie` - Add a new movie.
- `GET /movie/:id` - Retrieve details of a specific movie.
- `PUT /movie/:id` - Update an existing movie.
- `DELETE /movie/:id` - Delete a movie.

### Favorite Movies
- `POST /fav-movie` - Add a movie to the favorite list.
- `DELETE /fav-movie/:id` - Remove a movie from the favorite list.
- `GET /fav-movie/:email` - Retrieve all favorite movies for a specific user.

---

Movie Haven aims to provide movie enthusiasts with a seamless and enjoyable platform to explore and manage their favorite movies. Start your journey now!

