import { useState, useEffect } from "react";
import SingleComment from "./SigleComment";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import { commentCreate, commentsLoad } from "./redux/actions";

function Comments(props) {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  //   console.log("comments > ", comments);

  const handleInput = (e) => {
    e.preventDefault();
    setTextComment(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit text comment > ", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
    setTextComment("");
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
}
export default Comments;
