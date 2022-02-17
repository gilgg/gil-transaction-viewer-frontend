import "./Pagination.scss";
import { useSelector } from "react-redux";
import PageButton from "./PageButton";

const Pagination = () => {
  const buttons = [];
  const selectedPage = useSelector((state) => state.currentPage);
  const numberOfPages = useSelector((state) => state.numberOfPages);

  let start = selectedPage < 8 ? 1 : selectedPage - 6;
  let end = numberOfPages >= 8 ? start + 7 : numberOfPages;

  for (let num = start; num <= end; num++) {
    buttons.push(
      <PageButton key={num} selectedPage={selectedPage} pageNumber={num} />
    );
  }

  return (
    <div className="pagination">
      {buttons}
      {numberOfPages > 8 && <PageButton morePages={true} />}
    </div>
  );
};

export default Pagination;
