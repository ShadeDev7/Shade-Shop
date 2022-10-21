import { useReducer, useEffect } from "react";

import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import initialState from "./initialState";
import { getCategories, getProducts } from "services";

const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setIsLoading = (newValue: boolean) => {
        setTimeout(() => {
            dispatch({
                type: "SET_IS_LOADING",
                payload: newValue,
            });
        }, 1000);
    };

    const setCategories = (categories: Category[]) => {
        dispatch({
            type: "SET_CATEGORIES",
            payload: categories,
        });
    };

    const setCategory = (category: Category) => {
        dispatch({
            type: "SET_CATEGORY",
            payload: category,
        });
    };

    const setShowCategories = (newValue: boolean) => {
        dispatch({
            type: "SET_SHOW_CATEGORIES",
            payload: newValue,
        });
    };

    const setProducts = (products: Product[]) => {
        dispatch({
            type: "SET_PRODUCTS",
            payload: products,
        });
    };

    useEffect(() => {
        // We use AbortController to prevent double-effect rendering since React 18.
        const abortController = new AbortController();

        Promise.all([
            getCategories(abortController.signal),
            getProducts(abortController.signal),
        ]).then(values => {
            setCategories(values[0]);
            setProducts(values[1]);

            setIsLoading(false);
        });

        return () => abortController.abort();
    }, []);

    return (
        <AppContext.Provider value={{ ...state, setCategory, setShowCategories, setProducts }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
