import { useDispatch, useSelector } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
import { useCallback } from "react";
import requestTransactionListAction from "../../actions/transactionActions";


const TransactionListContainer = () => {
  const ids = useSelector(state => {return state.transactions.ids});
  const entities = useSelector(state => state.transactions.entities);

  const dispatch = useDispatch();
  const requestTransactionList = useCallback(() => {
    return dispatch(requestTransactionListAction())
  }, []);

  
  const transactions = ids.map(id => entities[id]);

  return (
    <TransactionList transactions={transactions} requestTransactionList={requestTransactionList}/>
  );
}

export default TransactionListContainer;