import CategoriesButton from "./CategoriesButton";

const Categories = ({
    categories,
    showCategories,
    setShowCategories,
}: {
    categories: string[];
    showCategories: boolean;
    setShowCategories: (newValue: boolean) => void;
}) => {
    return (
        <div className="scrollbar fixed bottom-0 flex w-full gap-2 border-t-2 border-neutral-200 bg-gray-100 p-2 [overflow-x:overlay] md:static md:bottom-auto md:flex-col md:gap-1 md:overflow-x-hidden md:border-none md:p-0">
            {categories.map(category => (
                <button
                    key={category}
                    className="px-2 text-sm text-gray-600 transition-colors duration-500 hover:text-indigo-600 md:border-b-[1px] md:border-neutral-300 md:p-3 md:hover:border-indigo-400"
                    onClick={() => setShowCategories(false)}
                >
                    {category}
                </button>
            ))}

            <div className="-ml-2 -mr-1 md:hidden">
                <CategoriesButton
                    showCategories={showCategories}
                    setShowCategories={setShowCategories}
                />
            </div>
        </div>
    );
};

export default Categories;
