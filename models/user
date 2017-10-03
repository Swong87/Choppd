const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { 
  	type: String, 
  	required: true 
  },
  image: String,
  bio: String,
  followers: Array,
  following: Array,
  isFollowing: Boolean,
  ingredients: Array,
  recipe: [{
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  }],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
