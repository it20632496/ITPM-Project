import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  productId: {
    required: true,
    type: String,
  },
  productName: {
    required: true,
    type: String,
  },
  productType: {
    required: true,
    type: String,
  },
  productPrice: {
    required: true,
    type: String,
  },
  companyId: {
    required: true,
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  quantity: {
    required: true,
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

export const Order = mongoose.model("orders", OrderSchema);
