import Api from "../lib/Api";

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

const setTransactionList = (transactions) => {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  }
};

const requestTransactionListAction = (value) => {
  return (dispatch) => {
    console.log('params : ', value);
    Api.get("/transactions", {params: value}).then(({ data }) => dispatch(setTransactionList(data)));
  }
}

export default requestTransactionListAction;