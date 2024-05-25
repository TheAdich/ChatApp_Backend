const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: { type: String, ref: "User" },
    content: { type: String},
    chat: { type: String, ref: "Chat" },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;