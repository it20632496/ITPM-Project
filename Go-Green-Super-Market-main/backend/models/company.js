import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  companyRepresentativeName: {
    required: true,
    type: String,
  },
  companyRepresentativeDesignation: {
    required: true,
    type: String,
  },
  companyRepresentativeEmail: {
    type: String,
  },
  companyRepresentativeMobile: {
    required: true,
    type: String,
  },
  comments: {
    type: String,
  },
  joinedDate: {
    type: String,
    required: true,
  },
});

export const Company = mongoose.model("companies", CompanySchema);
