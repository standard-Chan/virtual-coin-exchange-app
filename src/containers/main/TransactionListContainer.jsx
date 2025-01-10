import { useDispatch, useSelector } from "react-redux";
import TransactionList from "../../components/main/TransactionList";
import { useCallback } from "react";
import setTransactionListAction from "../../actions/transactionActions";


const TransactionListContainer = () => {
  const ids = useSelector(state => {console.log('state:', state); return state.transactions.ids});
  const entities = useSelector(state => state.transactions.entities);

  const dispatch = useDispatch();
  const setTransactionList = useCallback((transactions) => {
    return dispatch(setTransactionListAction(transactions))}, []);

  const transactions = ids.map(id => entities[id]);

  return (
    <TransactionList transactions={transactions} setTransactionList={setTransactionList}/>
  );
}

export default TransactionListContainer;