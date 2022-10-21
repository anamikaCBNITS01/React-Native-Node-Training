const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    _id:mongoose.Schema.Types.ObjectId,
    userId: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required:true
    },    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
