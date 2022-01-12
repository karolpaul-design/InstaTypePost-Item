import { INPUT_TEXT } from "./types";

const initialState = {
  text: "Header",
};

export const inputReducer = (state = initialState, action) => {
  //   console.log("input text Reducer > ", action);
  //   console.log(state);
  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      };

    default:
      return state;
  }
};
