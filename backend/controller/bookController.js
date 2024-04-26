import  mongoose  from 'mongoose';
import {bookModel} from '../models/book.js';
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
// backend/controllers/shopBookController.js

static placeOrder = async (req, res) => {
    try {
        // Check if user is logged in
        const userId = req.userId; // Access userId from middleware
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized", success: false });
        }
        
        const { cartItems } = req.body;
        
        // Calculate total price and create order items array
        let totalPrice = 0;
        const orderItems = [];
        
        for (const [bookId, quantity] of Object.entries(cartItems)) {
            const book = await bookModel.findById(bookId);
            if (!book) {
                return res.status(404).json({ message: `Book with id ${bookId} not found`, success: false });
            }
            const itemTotalPrice = book.price * quantity;
            totalPrice += itemTotalPrice;
            
            // Add book details and quantity to order items array
            orderItems.push({ book: bookId, quantity, totalPrice: itemTotalPrice });
        }
        
        // Create a new shopBook document
        const Order = new shopBookModel({
            userId,
            items: orderItems, // Update to include items array
            price: totalPrice
        });

        // Save the order
        await Order.save();
        
        res.status(200).json({ message: "Order placed successfully", Order, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred. Please try again later.", success: false });
    }
};

static getBookOrder = async (req,res)=>{
    try {
        const userId=req.userId;
        if(!userId){
             return res.status(401).json({ message: "Unauthorized", success: false });
        }
        console.log(userId);
        const Orders = await shopBookModel.find({ userId }).populate({
            path: 'items.book', // Populate nested field within the items array
            model: 'Book', // Model name
        });
        console.log(Orders[0].books);
        console.log(Orders);
        if(!Orders){
            return res.status(204).json({message:"No orders to display",success:true});
        }
        res.status(200).json({Orders});
    } catch (err) {
        console.log(err);
    }
}

}

export default bookController;