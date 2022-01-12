import { commentCreate } from "./actions";
import { COMMENT_CREATE } from "./types";
import { errorOn } from "./actions";
const badWords = ["дурак", "тупой"];
export function spamFiler(store) {
  return function (next) {
    return function (action) {
      if (action.type === COMMENT_CREATE) {
        console.log("spamFilter >> ", action.data.comment);
        const hasBadWords = badWords.some((res) =>
          action.data.comment.includes(res)
        );
        if (hasBadWords) {
          return store.dispatch(errorOn("Be friendly:)"));
        }
      }
      return next(action);
    };
  };
}
