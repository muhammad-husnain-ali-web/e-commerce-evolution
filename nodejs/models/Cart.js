import mongoose from "mongoose"
const { Schema, model, models} = mongoose

const CartsSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    quantity: { type: Number, required: true, min: 1 },
    createdAt: { type: Date, default: Date.now }
}
);

export default mongoose.models.Carts || model("Carts", CartsSchema)