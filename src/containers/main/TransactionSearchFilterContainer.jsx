import { useCallback } from "react";
import { useDispatch } from "react-redux";
import setTransactionListAction from "../../actions/transactionActions";
import TransactionSearchFilter from "../../components/main/TransactionSearchFilter";
import requestTransactionListAction from "../../actions/transactionActions";

const TransactionSearchFilterContainer = () => {
  const dispatch = useDispatch();
  const requestTransactionList = useCallback((params) => dispatch(requestTransactionListAction(params)), []);

  return (
    <TransactionSearchFilter requestTransactionList={requestTransactionList}/>
  )
}
  
export default TransactionSearchFilterContainer;