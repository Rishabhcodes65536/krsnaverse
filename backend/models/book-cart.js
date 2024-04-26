// backend/models/shopBookModel.js

import mongoose from "mongoose";
import { bookSchema } from "./book.js";
import { userSchema } from "./user.js";

const Book = mongoose.model('Book', bookSchema);
const User = mongoose.model('User', userSchema);

const orderItemSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const shopBookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [orderItemSchema],
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    orderStatus: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending'
    }
});

const shopBookModel = mongoose.model('ShopBook', shopBookSchema);

export default shopBookModel;
