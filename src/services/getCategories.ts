import { sort } from "helpers";

export default async function getCategories(signal: AbortSignal): Promise<Category[]> {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
            signal,
        });
        const response = await request.json();

        return sort("A-Z", response.categories, "name");
    } catch (e) {
        return [];
    }
}
