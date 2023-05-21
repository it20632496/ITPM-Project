import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
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
  image: {
    type: String,
  },
  availability: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  stock: {
    type: String,
    required: true,
  }
});

export const Product = mongoose.model("products", ProductSchema);
