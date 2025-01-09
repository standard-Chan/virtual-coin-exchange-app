import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";


const TransactionList = () => {

  const state = {
    transactions: [
      {
        id: 'btx',
        name: '비트코인',
        totalPrice : '123,123원',
        currentPrice: '4200000원',
        datetime: '2020/2/12', 
      },
      {
        id: 'ith',
        name: '이더리움',
        totalPrice : '233,123원',
        currentPrice: '4200000원',
        datetime: '2021/4/12', 
      }
    ],
  }
  return (
    <div>
      <Heading>거래 현황</Heading>
      <Card>
        <TransactionSearchFilter/>
      </Card>
      <Card>
        <TransactionTable transactions={state.transactions}/>
      </Card>
    </div>
  );
}

export default TransactionList;