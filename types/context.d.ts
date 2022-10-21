interface AppState {
    isLoading: boolean;
    categories: Category[];
    category: Category;
    showCategories: boolean;
    products: Product[];
}

interface AppContext extends AppState {
    setCategory: (category: Category) => void;
    setShowCategories: (newValue: boolean) => void;
    setProducts: (products: Product[]) => void;
}

type SET_IS_LOADING = "SET_IS_LOADING";
type SET_CATEGORIES = "SET_CATEGORIES";
type SET_CATEGORY = "SET_CATEGORY";
type SET_SHOW_CATEGORIES = "SET_SHOW_CATEGORIES";
type SET_PRODUCTS = "SET_PRODUCTS";

type AppAction =
    | {
          type: SET_IS_LOADING;
          payload: boolean;
      }
    | {
          type: SET_CATEGORIES;
          payload: Category[];
      }
    | {
          type: SET_CATEGORY;
          payload: Category;
      }
    | {
          type: SET_SHOW_CATEGORIES;
          payload: boolean;
      }
    | {
          type: SET_PRODUCTS;
          payload: Product[];
      };
