const express = require('express');
const { createComicBook, updateComicBook, deleteComicBook, getAllComicBooks, getComicBookById } = require('../controllers/comicBookController');

const router = express.Router();

router.post('/', createComicBook); // Create a comic book
router.put('/:id', updateComicBook); // Update a comic book
router.delete('/:id', deleteComicBook); // Delete a comic book
router.get('/', getAllComicBooks); // Get all comic books with filters
router.get('/:id', getComicBookById); // Get comic book details by ID

module.exports = router;