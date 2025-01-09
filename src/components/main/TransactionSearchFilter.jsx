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

const TransactionSearchFilter = ({ setFilter, onChange, values, history }) => {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <FormConsumer>
        {({ onChange, values }) => (
          <InlineList>
            <Text>검색</Text>
            <Select 
            name="code"
            label="코인 코드"
            value={values['code']}
            onChange={onChange}>
              <Option label="선택해주세요"/>
              <Option label="비트코인(BTX)" value="BTX"/>
              <Option label="이더리움(ETH)" value="ETH"/>
              <Option label="도지코인(DOZY)" value="DOZY"/>
            </Select>
            <Input
              name="minAmount"
              label="최소 거래가"
              onChange={onChange}
              value={values["minAmount"]}
            />
            <Input
              name="maxAmount"
              label="최소 거래가"
              onChange={onChange}
              value={values["maxAmount"]}
            />
            <Button type="submit">검색</Button>
          </InlineList>
        )}
      </FormConsumer>
    </Form>
  );
};

export default TransactionSearchFilter;