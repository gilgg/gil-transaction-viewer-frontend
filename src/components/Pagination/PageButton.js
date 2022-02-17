import "./PageButton.scss";
import { useDispatch } from "react-redux";

const PageButton = ({ selectedPage, pageNumber, morePages = false }) => {
  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_PAGE", newPage: pageNumber });
  };

  if (morePages) {
    return <button className="page-button more-pages">...</button>;
  }

  return (
    <button
      className={`page-button ${selectedPage === pageNumber ? "active" : ""}`}
      onClick={onClickHandler}
    >
      {pageNumber}
    </button>
  );
};

export default PageButton;
