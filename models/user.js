import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  givenName: {
    type: String,
    required: [true, "Given name is required!"],
    match: [
      /^(?=.{1,15}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Z0-9_. ]+(?<![_. ])$/,
      "Given name invalid, it should contain 1-15 alphanumeric letters!",
    ],
  },
  familyName: {
    type: String,
    required: [true, "Family name is required!"],
    match: [
      /^(?=.{1,30}$)(?![_. ])(?!.*[_. ]{2})[a-zA-Z0-9_. ]+(?<![_. ])$/,
      "Family name invalid, it should contain 1-30 alphanumeric letters!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
