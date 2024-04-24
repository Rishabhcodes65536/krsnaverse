import  mongoose  from 'mongoose';
import bookModel from '../models/book.js';
import shopBookModel from '../models/book-cart.js';

class bookController{
 static getAllBooks = async (req, res) => {
    try {
        console.log(req.session.user);
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

    static placeOrder = async (req, res) => {
    try {
        // Check if user is logged in
        console.log(req.session.user);
        if (!req.session.user) {
            return res.json({ message: "User not logged in", success: false });
        }
        
        const userId = req.session.user._id;
        const { cartItems } = req.body;
        console.log(cartItems,userId)
        // Calculate total price
        let totalPrice = 0;
        for (const [bookId, quantity] of Object.entries(cartItems)) {
            const book = await bookModel.findById(bookId);
            if (!book) {
                return res.status(404).json({ message: `Book with id ${bookId} not found`, success: false });
            }
            totalPrice += book.price * quantity;
        }
        // Create a new shopBook document
        const order = new shopBookModel({
            userId,
            books: Object.keys(cartItems),
            price: totalPrice
        });

        // Save the order
        await order.save();
        
        res.status(200).json({ message: "Order placed successfully", order, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred. Please try again later.", success: false });
    }
};

}

export default bookController;