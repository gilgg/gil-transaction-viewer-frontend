import "./HeaderItem.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { sortArray } from "../../helpers/helpers";

const HeaderItem = ({ field, sortField, setSortField }) => {
  const dispatch = useDispatch();
  const [sortType, setSortType] = useState(0);
  const filteredTransactions = useSelector(
    (state) => state.filteredTransactions
  ).slice();

  useEffect(() => {
    if (field !== sortField) {
      setSortType(0);
    }
  }, [sortField]);

  const onClickHandler = () => {
    setSortField(field);
    const nextSortType = (sortType + 1) % 3;
    setSortType(nextSortType);

    if (nextSortType !== 0) {
      const transactions = sortArray(filteredTransactions, field, nextSortType);
      dispatch({ type: "SORT_TRANSACTIONS", transactions });
    } else {
      dispatch({ type: "REMOVE_SORT_TRANSACTIONS" });
    }
  };

  const getArrow = () => {
    if (sortType === 1) {
      return <BsArrowDown />;
    } else if (sortType === 2) {
      return <BsArrowUp />;
    } else {
      return;
    }
  };

  return (
    <th
      className={`${field.toLowerCase().replaceAll(" ", "_")}`}
      onClick={onClickHandler}
    >
      <span className="field-name">{field}</span> <span>{getArrow()}</span>
    </th>
  );
};

export default HeaderItem;
