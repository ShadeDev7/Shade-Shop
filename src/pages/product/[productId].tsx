import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import AppContext from "context/AppContext";
import { Layout, ProductDisplay } from "components";

const Product = () => {
    const { products } = useContext(AppContext);
    const [product, setProduct] = useState<Product | null>(null);
    const router = useRouter();

    const { productId } = router.query;

    useEffect(() => {
        if (!productId || !products.length) return;

        const foundProduct = products.find(({ _id }) => _id === productId);

        if (!foundProduct) {
            router.push("/");

            return;
        }

        setProduct(foundProduct);
    }, [productId, products]);

    return (
        product && (
            <Layout>
                <div className="my-8 w-full md:my-16">
                    <ProductDisplay product={product} />
                </div>
            </Layout>
        )
    );
};

export default Product;
