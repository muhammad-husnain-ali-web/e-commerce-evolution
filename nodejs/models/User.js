import mongoose from "mongoose"
const { Schema, model, models} = mongoose

const UsersSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  createdAt: { type: Date, default: Date.now }
}
);

export default mongoose.models.Users || model("Users", UsersSchema)