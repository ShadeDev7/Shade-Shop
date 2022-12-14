import { useContext } from "react";

import AppContext from "context/AppContext";

const CategoriesButton = () => {
    const { showCategories, setShowCategories } = useContext(AppContext);

    return (
        <button
            aria-label="Categorías"
            className="grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 hover:bg-white md:hidden [&>svg>g]:hover:fill-indigo-600"
            onClick={() => setShowCategories(!showCategories)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                <g className="fill-gray-600 [&>path]:transition-colors [&>path]:duration-500">
                    <path
                        d={
                            showCategories
                                ? "M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"
                                : "M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
                        }
                    />
                </g>
            </svg>
        </button>
    );
};

export default CategoriesButton;
