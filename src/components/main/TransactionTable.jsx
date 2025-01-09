import Table from "../../ui/Table";
import TableBody from "../../ui/TableBody";
import TableCell from "../../ui/TableCell";
import TableHead from "../../ui/TableHead";
import TableRow from "../../ui/TableRow";

/*  props 형태

  transactions: [
    {
      id: 'btx',
      name: '비트코인',
      totalPrice : '123,123,123원',
      currentPrice: '4200000원',
      datetime: '2020/2/12', 
    }
  ],
*/

const TransactionTable = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>코인</TableCell>
          <TableCell>시가 총액</TableCell>
          <TableCell>현재 시세</TableCell>
          <TableCell>시간</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(({id, name, totalPrice, currentPrice, datetime}) => (
        <TableRow key={id}>
          <TableCell>{name}</TableCell>
          <TableCell>{totalPrice}</TableCell>
          <TableCell>{currentPrice}</TableCell>
          <TableCell>{datetime}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
