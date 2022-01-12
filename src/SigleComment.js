import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./redux/actions";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

function SingleComment({ data }) {
  const [singleCommentText, setSingleCommentText] = useState("");
  //   console.log(props);
  const { text, id } = data;
  useEffect(() => {
    if (text) {
      setSingleCommentText(text);
    }
  }, [text]);

  const dispatch = useDispatch();
  const handleInput = (e) => {
    setSingleCommentText(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("submit single comment > ", singleCommentText);

    dispatch(commentUpdate(singleCommentText, id));
  };
  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(commentDelete(id));
  };
  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={singleCommentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
