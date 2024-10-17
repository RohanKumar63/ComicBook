const ComicBook = require('../models/ComicBook');

// Create comic book
exports.createComicBook = async (req, res) => {
  try {
    const newComicBook = new ComicBook(req.body);
    const savedComicBook = await newComicBook.save();
    res.status(201).json(savedComicBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update comic book
exports.updateComicBook = async (req, res) => {
  try {
    const updatedComicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedComicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.status(200).json(updatedComicBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete comic book
exports.deleteComicBook = async (req, res) => {
  try {
    const deletedComicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!deletedComicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.status(200).json({ message: 'Comic book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all comic books with filters
exports.getAllComicBooks = async (req, res) => {
  try {
    const { author, year, price, condition } = req.query;
    const filter = {};
    
    if (author) filter.author = author;
    if (year) filter.year = year;
    if (price) filter.price = { $lte: price };
    if (condition) filter.condition = condition;

    const comicBooks = await ComicBook.find(filter).limit(10); // Pagination can be added here
    res.status(200).json(comicBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get comic book details by ID
exports.getComicBookById = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic book not found' });
    res.status(200).json(comicBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 