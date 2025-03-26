# Note App

A simple and efficient note-taking application built with **Node.js**, **Express.js**, and **MongoDB**. This app allows users to create, update, delete, and manage their notes effortlessly.

## Features

- Create, read, update, and delete (CRUD) notes
- Secure authentication using JWT
- User-friendly interface
- MongoDB as the database
- RESTful API architecture
- Error handling and validation

## Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JavaScript** - Frontend & Backend logic
- **JWT** - Authentication mechanism

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/note-app.git
   cd note-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Start the server**
   ```sh
   npm start
   ```
   The server will run at `http://localhost:5000`

## API Endpoints

| Method | Endpoint       | Description             |
|--------|---------------|-------------------------|
| GET    | /notes        | Get all notes           |
| POST   | /notes        | Create a new note       |
| PUT    | /notes/:id    | Update an existing note |
| DELETE | /notes/:id    | Delete a note           |

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to modify this README as per your project requirements! 🚀

