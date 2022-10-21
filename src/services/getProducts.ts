import { sort } from "helpers";

export default async function getProducts(): Promise<Product[]> {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
        const response = await request.json();

        return sort("A-Z", response.products, "name");
    } catch (e) {
        return [];
    }
}
