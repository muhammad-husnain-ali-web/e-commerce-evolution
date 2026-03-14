import mongoose from "mongoose"
const { Schema, model, models} = mongoose

const ProductsSchema = new Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  createdAt: { type: Date, default: Date.now }
}
);

export default mongoose.models.Products || model("Products", ProductsSchema)