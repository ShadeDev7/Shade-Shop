import type { NextApiRequest, NextApiResponse } from "next";

import db from "utils/db";
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
            try {
                const product = await new Product(body).save();

                return res.status(201).json({ product });
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "PUT":
            try {
                const { id } = query;

                if (!id) {
                    throw new Error("You must supply an id to update a product!");
                }

                await Product.updateOne({ _id: id }, { $set: body });

                return res.status(204).end();
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "DELETE":
            try {
                const { id } = query;

                if (!id) {
                    throw new Error("You must supply an id to delete a product!");
                }

                await Product.deleteOne({ _id: id });

                return res.status(204).end();
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        default:
            return res.status(405).json({ msg: "Method not allowed!" });
    }
}
