export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

const setTransactionListAction = (transactions) => {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  }
};

export default setTransactionListAction;