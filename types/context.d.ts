interface AppState {
    categories: Category[];
    category: Category;
    showCategories: boolean;
}

interface AppContext extends AppState {
    setCategory: (category: Category) => void;
    setShowCategories: (newValue: boolean) => void;
}

type SET_CATEGORIES = "SET_CATEGORIES";
type SET_CATEGORY = "SET_CATEGORY";
type SET_SHOW_CATEGORIES = "SET_SHOW_CATEGORIES";

type AppAction =
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
      };
