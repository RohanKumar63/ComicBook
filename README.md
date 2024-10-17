
# Comic Book Store Backend

This project is the backend API for a comic book e-commerce store. It allows the management of comic books as inventory items using CRUD (Create, Read, Update, Delete) operations. The project is built using Node.js, Express.js, and MongoDB for managing comic book data and inventory.

## Features

- **Create Comic Books**: Add new comic books to the store’s inventory.
- **Read Comic Books**: Fetch a list of all comic books in the store, with pagination, filtering, and sorting options.
- **Update Comic Books**: Edit details of existing comic books, including price, condition, and other attributes.
- **Delete Comic Books**: Remove comic books from the store’s inventory.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing comic book details.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **GitHub**: Version control and project repository.

## Getting Started

### Prerequisites

- **Node.js** installed on your machine.
- **MongoDB** (either installed locally or a cloud instance, e.g., MongoDB Atlas).
-- i am using mongoDBCompass (Desktop Version)
- In this code if you want to use MongoDB Atlas Please change the .env file and mongoose code.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/RohanKumar63/ComicBook.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd ComicBook
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:
   
   Create a `.env` file in the root directory and add the following variables:
   
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/comicbookstore
   ```

   Replace `MONGO_URI` with your MongoDB connection string if necessary.

5. **Start the server**:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:5000` by default.

### API Endpoints

Here are the main API endpoints for managing the comic book inventory:

- **Create a Comic Book**:  
  `POST /api/comics`  
  Add a new comic book to the inventory.

- **Get Comic Books**:  
  `GET /api/comics`  
  Fetch all comic books with support for pagination, filtering, and sorting.

- **Get Comic Book by ID**:  
  `GET /api/comics/:id`  
  Retrieve details of a specific comic book by its ID.

- **Update Comic Book**:  
  `PUT /api/comics/:id`  
  Edit the details of an existing comic book by its ID.

- **Delete Comic Book**:  
  `DELETE /api/comics/:id`  
  Remove a comic book from the inventory.

### Postman Collection

To test the API endpoints, you can import the provided Postman collection (`comic-book-store.postman_collection.json`) into Postman.


## Contributing

If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request


