import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const useFetchTransactions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTransactionsFromApi = async () => {
      const transactionsFromApi = (
        await axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
      ).data;
      dispatch({
        type: "INIT_TRANSACTIONS",
        transactions: transactionsFromApi,
      });
    };
    getTransactionsFromApi();
  }, []);
};

export default useFetchTransactions;
