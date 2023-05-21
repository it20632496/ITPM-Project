import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransportSchema = new Schema({
  orderId: {
    required: true,
    type: String,
  },
  companyId: {
    required: true,
    type: String,
  },
  companyName: {
    required: true,
    type: String,
  },
  companyType: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  installationDate: {
    required: true,
    type: String,
  },
  assignDriverName: {
    required: true,
    type: String,
  },
  assignDriverNumber: {
    type: String,
    required: true,
  }
});

export const Transport = mongoose.model("transports", TransportSchema);
