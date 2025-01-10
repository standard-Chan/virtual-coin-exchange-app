import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";
import Text from "../../ui/Text";

const CoinDashlet = ({ name, priceLabel }) => {
  return (
    <div>
      <Card>
        <Heading level={3} marginTop={'10px'} marginBottom={'10px'}>
          {name}
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineList align={'flex-start'} spacingBetween={10} verticalAlign={'center'}>
          <Button size={'small'}>매도</Button>
          <Button size={'small'}>매수</Button>
        </InlineList>
      </Card>
    </div>
  )
}

export default CoinDashlet;