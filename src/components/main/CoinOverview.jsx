import Heading from "../../ui/Heading";
import InlineList from "../../ui/InlineList";
import CoinDashlet from "./CoinDashlet";

const CoinOverView = () => {
  return (
    <>
      <Heading level={2} marginTop={'10px'} marginBottom={'10px'}> 코인 동향 </Heading>
      <InlineList align={'flex-start'} spacingBetween={10} verticalAlign={'center'}>
        <CoinDashlet name="비트코인" priceLabel="3216000원"/>
        <CoinDashlet name="이더리움" priceLabel="216000원"/>
        <CoinDashlet name="도지코인" priceLabel="30000원"/>
      </InlineList>
    </>
  )
}

export default CoinOverView;