import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "The category name is required!"],
            unique: true,
            trim: true,
            maxlength: [16, "The category name can't be that long!"],
        },
    },
    { versionKey: false }
);

export default models.Category || model("Category", CategorySchema);
