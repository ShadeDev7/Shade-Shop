import { useContext } from "react";
import type { NextPage } from "next";

import AppContext from "context/AppContext";
import { Layout, Filters, ProductPreview } from "components";

const Index: NextPage = () => {
    const { category, products } = useContext(AppContext);

    return (
        <Layout>
            <div className="flex flex-col items-center gap-8 py-8">
                <h1 className="text-3xl font-bold text-indigo-600 [line-height:1]">
                    {category.name}
                </h1>

                <Filters />

                <main className="flex flex-col justify-around gap-y-16 py-4 md:px-8 lg:flex-row lg:flex-wrap lg:gap-y-24 lg:gap-x-8">
                    {(category._id
                        ? products.filter(product => product.categoryId === category._id)
                        : products
                    ).map(product => (
                        <ProductPreview key={product._id} product={product} />
                    ))}
                </main>
            </div>
        </Layout>
    );
};

export default Index;
