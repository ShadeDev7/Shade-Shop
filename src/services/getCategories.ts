import { sort } from "helpers";

export default async function getCategories(): Promise<Category[]> {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
        const response = await request.json();

        return sort("A-Z", response.categories, "name");
    } catch (e) {
        return [];
    }
}
