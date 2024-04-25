// backend/models/shopBookModel.js

import mongoose from "mongoose";
import { bookSchema } from "./book.js";
import { userSchema } from "./user.js";

const Book = mongoose.model('Book', bookSchema);
const User = mongoose.model('User', userSchema);

const shopBookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const shopBookModel= mongoose.model('ShopBook', shopBookSchema);

export default shopBookModel;
