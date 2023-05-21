import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  specificName: {
    required: true,
    type: String,
  },
  genericName: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  quantity: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
});

export const Product = mongoose.model("products", ProductSchema);
