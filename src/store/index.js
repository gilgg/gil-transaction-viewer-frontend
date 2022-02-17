import { createStore } from "redux";
import {
  getResultsByLimitAndPage,
  getResultsByFilter,
} from "../helpers/helpers";

const initState = {
  allTransactions: [],
  filteredTransactions: [],
  sorted: [],
  currentPageTransactions: [],
  currentPage: 1,
  numberOfPages: 1,
  limit: 10,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT_TRANSACTIONS":
      return {
        ...state,
        allTransactions: [...action.transactions],
        filteredTransactions: [...action.transactions],
        sorted: [...action.transactions],
        currentPageTransactions: getResultsByLimitAndPage(
          [...action.transactions],
          10,
          1
        ),
        numberOfPages: Math.ceil(action.transactions.length / state.limit),
      };
    case "FILTER_TRANSACTIONS":
      const filteredTransactions = getResultsByFilter(
        [...state.allTransactions],
        action.filterBy,
        action.query
      );

      return {
        ...state,
        filteredTransactions,
        sorted: [...filteredTransactions],
        currentPageTransactions: getResultsByLimitAndPage(
          [...filteredTransactions],
          state.limit,
          1
        ),
        currentPage: 1,
        numberOfPages: Math.ceil(filteredTransactions.length / state.limit),
      };
    case "SORT_TRANSACTIONS":
      return {
        ...state,
        sorted: [...action.transactions],
        currentPageTransactions: getResultsByLimitAndPage(
          action.transactions,
          state.limit,
          1
        ),
        currentPage: 1,
      };
    case "REMOVE_SORT_TRANSACTIONS":
      return {
        ...state,
        currentPageTransactions: getResultsByLimitAndPage(
          [...state.filteredTransactions],
          state.limit,
          1
        ),
        currentPage: 1,
      };
    case "CHANGE_LIMIT":
      return {
        ...state,
        currentPageTransactions: getResultsByLimitAndPage(
          [...state.sorted],
          action.limit,
          state.currentPage
        ),
        numberOfPages: Math.ceil(
          state.filteredTransactions.length / action.limit
        ),
        limit: action.limit,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPageTransactions: getResultsByLimitAndPage(
          [...state.sorted],
          state.limit,
          action.newPage
        ),
        currentPage: action.newPage,
      };
    case "SHOW_ALL":
      return {
        ...state,
        filteredTransactions: [...state.allTransactions],
        sorted: [...state.allTransactions],
        currentPageTransactions: getResultsByLimitAndPage(
          state.allTransactions,
          state.limit,
          1
        ),
        currentPage: 1,
        numberOfPages: Math.ceil(state.allTransactions.length / state.limit),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
