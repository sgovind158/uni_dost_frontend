import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false, // optional
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
