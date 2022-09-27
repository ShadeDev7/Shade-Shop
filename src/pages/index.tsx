import { useContext } from "react";
import type { NextPage } from "next";

import AppContext from "context/AppContext";
import { Layout } from "components";

const Index: NextPage = () => {
    const { category } = useContext(AppContext);

    return (
        <Layout>
            <h2 className="py-4 text-3xl font-bold text-indigo-600">{category.name}</h2>
        </Layout>
    );
};

export default Index;
