import { useCallback } from "react";
import { useDispatch } from "react-redux";
import setTransactionListAction from "../../actions/transactionActions";
import TransactionSearchFilter from "../../components/main/TransactionSearchFilter";

const TransactionSearchFilterContainer = () => {
  const dispatch = useDispatch();
  const setTransactionList = useCallback((transactions) => dispatch(setTransactionListAction(transactions)), []);

  return (
    <TransactionSearchFilter setTransactionList={setTransactionList}/>
  )
}

export default TransactionSearchFilterContainer;