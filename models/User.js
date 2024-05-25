const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
      name: { type: "String", required: true },
      email: { type: "String", unique: true, required: true },
      password: { type: "String", required: true },
      pic: {
        type: "String",
        default:
          "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
      },
      isAdmin: {  
        type: Boolean,
        required: true,
        default: false,
      },
      token:{type:String, required:true},
      bio:{type:String, default:'Hey, I am using whatsapp!'}
    },
    { timestaps: true }
  );

const User = mongoose.model("User", userSchema);

module.exports = User;