// backend/models/shopBookModel.js

import mongoose from "mongoose";

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
