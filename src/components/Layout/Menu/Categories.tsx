import { useContext } from "react";
import { useRouter } from "next/router";

import AppContext from "context/AppContext";
import CategoriesButton from "./CategoriesButton";

const Categories = () => {
    const { categories, category, setCategory, setShowCategories } = useContext(AppContext);
    const router = useRouter();

    const handleClick = (newCategory: Category) => {
        setCategory(newCategory);
        setShowCategories(false);

        if (router.pathname !== "/") router.push("/");
    };

    return (
        <div className="scrollbar fixed bottom-0 flex w-full gap-2 border-t-2 border-neutral-200 bg-gray-100 p-2 [overflow-x:overlay] md:static md:bottom-auto md:flex-col md:gap-1 md:overflow-x-hidden md:border-none md:p-0">
            {categories.map(({ _id, name }) => (
                <button
                    key={_id}
                    className={`px-2 text-sm transition-colors duration-500 md:border-b-[1px] md:p-3 ${
                        category._id == _id
                            ? "text-indigo-600 md:border-indigo-400"
                            : "text-gray-600 hover:text-indigo-600 md:border-neutral-300 md:hover:border-indigo-400"
                    }`}
                    onClick={() => handleClick({ _id, name })}
                >
                    {name}
                </button>
            ))}

            <div className="-ml-2 -mr-1 md:hidden">
                <CategoriesButton />
            </div>
        </div>
    );
};

export default Categories;
