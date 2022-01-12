import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export function incrementLikes() {
  return {
    type: INCREMENT,
  };
}
export function decrementLikes() {
  return {
    type: DECREMENT,
  };
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text,
  };
}

export function commentCreate(comment, id) {
  return {
    type: COMMENT_CREATE,
    data: { comment, id },
  };
}
export function commentUpdate(comment, id) {
  return {
    type: COMMENT_UPDATE,
    data: { comment, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    data: { id },
  };
}
export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  };
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_ON,
  };
}

export function commentsLoad() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=5"
      );
      const jsonData = await response.json();
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData,
      });
    } catch (err) {
      dispatch(errorOn("Error API"));
    }
  };
}
