export default function AppReducer(state: AppState, action: AppAction): AppState {
    const { type, payload } = action;

    switch (type) {
        case "SET_CATEGORIES":
            return {
                ...state,
                categories: [...state.categories, ...payload],
            };

        case "SET_SHOW_CATEGORIES":
            return {
                ...state,
                showCategories: payload,
            };

        default:
            return state;
    }
}
