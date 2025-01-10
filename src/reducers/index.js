import { combineReducers } from "redux";
import transactions from "./transactionsReducer";

const rootReducer = combineReducers({
  transactions,
})

export default rootReducer;