import { useReducer, useEffect } from "react";

import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import initialState from "./initialState";
import { getCategories } from "services";

const AppProvider = ({ children }: AppProviderProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

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

    useEffect(() => {
        // We use AbortController to prevent double-effect rendering since React 18.
        const abortController = new AbortController();

        getCategories(abortController.signal).then(categories => setCategories(categories));

        return () => abortController.abort();
    }, []);

    return (
        <AppContext.Provider value={{ ...state, setCategory, setShowCategories }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
