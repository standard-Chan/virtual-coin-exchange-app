import Api from "../../lib/Api";
import Button from "../../ui/Button";
import Form, { FormConsumer } from "../../ui/Form";
import InlineList from "../../ui/InlineList";
import Input from "../../ui/Input";
import Select, { Option } from "../../ui/Select";
import Text from "../../ui/Text";


/*
Form의 onChange 함수
values = {
  ([name] : e.target.value)
  code : '코인이름'
  value : input값
}
*/

const TransactionSearchFilter = ({ setFilter, setTransactionList, onChange, values, history }) => {
  return (
    <Form onSubmit={(values) => Api.get("/transactions", {params:values}).then(({data})=>setTransactionList(data))}>
      <FormConsumer>
        {({ onChange, values }) => (
          <InlineList align={'flex-start'} spacingBetween={10} verticalAlign={'center'}>
            <Text>검색{console.log(values)}</Text>
            <Select 
            name="code"
            label="코인 코드"
            value={values['code']}
            onChange={onChange}>
              <Option label="선택해주세요" value=""/>
              <Option label="비트코인(BTX)" value="BTX"/>
              <Option label="이더리움(ETH)" value="ETH"/>
              <Option label="도지코인(DOZY)" value="DOZY"/>
            </Select>
            <Input
              name="currentPrice_gte"
              label="최소 거래가"
              onChange={onChange}
              value={values["currentPrice_gte"]}
            />
            <Input
              name="currentPrice_lte"
              label="최대 거래가"
              onChange={onChange}
              value={values["currentPrice_lte"]}
            />
            <Button type="submit">검색</Button>
          </InlineList>
        )}
      </FormConsumer>
    </Form>
  );
};

export default TransactionSearchFilter;