import  mongoose  from 'mongoose';
import bookModel from '../models/book.js';

class bookController{
 static getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
    };

    static getBookById = async (req, res) => {
        try {
            const book = await bookModel.findById(req.params.id);
            if (!book) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json(book);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    static createBook = async (req, res) => {
        try {
            const newBook = new bookModel(req.body);
            await newBook.save();
            res.status(201).json(newBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    static updateBook = async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBook = await bookModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json(updatedBook);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };

    static deleteBook = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedBook = await bookModel.findByIdAndDelete(id);
            if (!deletedBook) {
                return res.status(404).json({ message: 'Book not found' });
            }
            res.json({ message: 'Book deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
    };
}

export default bookController;