import {
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
} from "./types";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log("comments Reducer > ", action);
  const { data } = action;
  const { comments } = state;
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENTS_LOAD:
      const commentsNew = action.data.map((res) => {
        return {
          text: res.name,
          id: res.id,
        };
      });
      console.log(action.data[0].name);
      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_UPDATE:
      const itemIndex = comments.findIndex((comment) => comment.id === data.id);
      const updatedComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];
      return {
        ...state,
        comments: updatedComments,
      };

    case COMMENT_DELETE:
      const deletedComments = comments.filter(
        (comment) => comment.id !== data.id
      );
      return {
        ...state,
        comments: deletedComments,
      };

    default:
      return state;
  }
};
