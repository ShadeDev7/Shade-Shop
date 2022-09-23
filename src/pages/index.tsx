import type { NextPage, GetServerSideProps } from "next";

import { Layout } from "components";
import { getCategories } from "services";

const Index: NextPage<IndexProps> = ({ categories }) => {
    return (
        <Layout categories={categories}>
            <h1>Hello World!</h1>
        </Layout>
    );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
    const categories = await getCategories();

    return { props: { categories } };
};
