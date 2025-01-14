import { useEffect, useState } from "react";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import Spacing from "../../ui/Spacing";
import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";

const TransactionList = ({transactions, requestTransactionList}) => {
  console.log('transaction : ', transactions);
  useEffect(() => {
    requestTransactionList();
  }, []);

  return (
    <div>
      <Heading level={2} marginTop={"10px"} marginBottom={"10px"}>
        거래 현황
      </Heading>
      <Card>
        <TransactionSearchFilterContainer/>
      </Card>
      <Spacing top={20} bottom={10} vertical={50} />
      <Card>
        <TransactionTable transactions={transactions} />
      </Card>
    </div>
  );
};

TransactionList.defaultProps = {
  transactions: [],
  setTransactionList: () => {},
};

export default TransactionList;
