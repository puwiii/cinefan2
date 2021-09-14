export const THEME_STATE = {
  DARK: "dark",
  LIGHT: "light",
};

export const initialState = {
  theme: THEME_STATE.LIGHT,
  lang: "en",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.theme,
      };

    case "SET_LANG":
      return {
        ...state,
        theme: action.lang,
      };

    default:
      return state;
  }
};

export default reducer;
