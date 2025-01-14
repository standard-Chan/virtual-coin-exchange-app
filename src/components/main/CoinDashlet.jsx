import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";
import Text from "../../ui/Text";
import { Consumer as ModalConsumer } from "../../ui/Modal/context";
import { TRADE_COIN_MODAL } from "../../constant/modals";

const CoinDashlet = ({ name, priceLabel }) => {
  console.dir(ModalConsumer);
  return (
    <ModalConsumer>
      {({ openModal }) => (
        <Card>
          <Heading level={3} marginTop={"10px"} marginBottom={"10px"}>
            {name}
            <Text>{priceLabel}</Text>
          </Heading>
          <InlineList
            align={"flex-start"}
            spacingBetween={10}
            verticalAlign={"center"}
          >
            <Button
              size={"small"}
              onPress={() =>
                openModal(TRADE_COIN_MODAL, {
                  type: "buy",
                  name,
                  price: priceLabel,
                })
              }
            >
              매도
            </Button>
            <Button
              size={"small"}
              onPress={() =>
                openModal(TRADE_COIN_MODAL, {
                  type: "sell",
                  name,
                  price: priceLabel,
                })
              }
            >
              매수
            </Button>
          </InlineList>
        </Card>
      )}
    </ModalConsumer>
  );
};

export default CoinDashlet;
