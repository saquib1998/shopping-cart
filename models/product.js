const mongoose = require("mongoose");
const Review = require("./review");
const User = require("./user");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    desc: {
        type: String,
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
