import type { NextApiRequest, NextApiResponse } from "next";

import db from "utils/db";
import { Category } from "models";

db.connect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const categories = await Category.find();

                return res.status(200).json({ categories });
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "POST":
            try {
                const category = await new Category(body).save();

                return res.status(201).json({ category });
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "PUT":
            try {
                const { id, name } = body;

                if (!id || !name) {
                    throw new Error("You must supply id and name to update a category!");
                }

                await Category.updateOne({ _id: id }, { name });

                return res.status(204).end();
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        case "DELETE":
            try {
                const { id } = body;

                if (!id) {
                    throw new Error("You must supply an id to delete a category!");
                }

                await Category.deleteOne({ _id: id });

                return res.status(204).end();
            } catch (e: any) {
                return res.status(400).json({ msg: e.message });
            }

        default:
            return res.status(405).json({ msg: "Method not allowed!" });
    }
}
