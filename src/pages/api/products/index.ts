import type { NextApiRequest, NextApiResponse } from "next";

import db from "utils/db";
import cloudinary from "utils/cloudinary";
import { Product } from "models";

db.connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body, query } = req;

    switch (method) {
        case "GET":
            try {
                const products = await Product.find();

                return res.status(200).json({ products });
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "POST":
            let uploadedImageIds: string[] = [];
            let uploadedImages: string[] = [];

            try {
                const images: string[] = body.images;

                if (!images) {
                    throw new Error("The product images are required!");
                }

                await Promise.all(
                    images.map(image =>
                        cloudinary.uploader.upload(image, {
                            upload_preset: "products",
                        })
                    )
                ).then(results =>
                    results.forEach(({ secure_url, public_id }) => {
                        uploadedImages.push(secure_url);
                        uploadedImageIds.push(public_id);
                    })
                );

                const product = await new Product({ ...body, images: uploadedImages }).save();

                return res.status(201).json({ product });
            } catch (e: any) {
                if (uploadedImageIds.length) {
                    uploadedImageIds.forEach(imageId => cloudinary.uploader.destroy(imageId));
                }

                return res.status(400).json({ msg: e.message });
            }

        case "PATCH":
            let newImageId = "";

            try {
                const { id } = query;
                const { image } = body;

                if (!id) {
                    throw new Error("You must supply an id to update a product!");
                }

                if (image) {
                    const { public_id, secure_url } = await cloudinary.uploader.upload(image, {
                        upload_preset: "products",
                    });
                    newImageId = public_id;
                    body.image = secure_url;
                }

                const beforeUpdate = await Product.findOneAndUpdate({ _id: id }, body);

                if (image) {
                    cloudinary.uploader.destroy(
                        "products/" + beforeUpdate.image.replace(/\./g, "/").split("/").at(-2)
                    );
                }

                return res.status(204).end();
            } catch (e: any) {
                if (newImageId) {
                    cloudinary.uploader.destroy(newImageId);
                }

                return res.status(400).json({ msg: e.message });
            }

        case "DELETE":
            try {
                const { id } = query;

                if (!id) {
                    throw new Error("You must supply an id to delete a product!");
                }

                const beforeDelete = await Product.findOneAndDelete({ _id: id });

                Promise.all(
                    beforeDelete.images.map((image: string) =>
                        cloudinary.uploader.destroy(
                            "products/" + image.replace(/\./g, "/").split("/").at(-2)
                        )
                    )
                );

                return res.status(204).end();
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        default:
            return res.status(405).json({ msg: "Method not allowed!" });
    }
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "2mb",
        },
    },
};
