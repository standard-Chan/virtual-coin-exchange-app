import Button from "../../ui/Button";
import Card from "../../ui/Card";
import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";
import Text from "../../ui/Text";
import { Consumer as ModalConsumer } from "../../ui/Modal/context";
import { TRADE_COIN_MODAL } from "../../constant/modals";
import { useEffect, useState } from "react";

const CoinDashlet = ({ name, priceLabel }) => {
  const [code, setCode] = useState();
  useEffect(() => {
    switch (name) {
      case "비트코인":
        setCode("BTX");
        break;
      case "이더리움":
        setCode("ETH");
        break;
      case "도지코인":
        setCode("DOZY");
        break;
      default:
        break;
    }
  }, [name]);

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
                  code,
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
                  code,
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
