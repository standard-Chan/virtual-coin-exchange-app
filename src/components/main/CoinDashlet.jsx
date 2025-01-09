import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";
import Text from "../../ui/Text";

const CoinDashlet = ({ name, priceLabel }) => {
  return (
    <div>
      <Card>
        <Heading>
          {name}
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineList>
          <Button>매도</Button>
          <Button>매수</Button>
        </InlineList>
      </Card>
    </div>
  )
}

export default CoinDashlet;