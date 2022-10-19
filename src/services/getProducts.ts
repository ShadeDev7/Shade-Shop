import { sort } from "helpers";

export default async function getProducts(signal: AbortSignal): Promise<Product[]> {
    try {
        const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
            signal,
        });
        const response = await request.json();

        return sort("A-Z", response.products, "name");
    } catch (e) {
        return [];
    }
}
