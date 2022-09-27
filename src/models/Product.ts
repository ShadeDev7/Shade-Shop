import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The product name is required!"],
            trim: true,
            maxlength: [32, "The product name can't be that long!"],
        },
        description: {
            type: String,
            required: [true, "The product description is required!"],
            trim: true,
            minlength: [16, "The product description must have at least 16 characters!"],
            maxlength: [256, "The product description can't be that long!"],
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            required: [true, "The categoryId is required!"],
        },
        price: {
            type: Number,
            required: [true, "The product price is required!"],
            min: [0, "The product price can't be negative!"],
        },
        stock: {
            type: Number,
            required: [true, "The product must have a stock!"],
            min: [0, "The product stock can't be negative!"],
        },
        image: {
            type: String,
            trim: true,
        },
    },
    { versionKey: false }
);

export default models.Product || model("Product", ProductSchema);
