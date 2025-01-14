import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";
import ModalProvider from "./provider/ModalProvider";
import { Consumer } from "./ui/Modal/context";

const CoinApp = () => {
  return (
    <ModalProvider>
      <AppLayout>
        <MainPage />
      </AppLayout>
    </ModalProvider>
  );
};
// ModalProvider에서 2개의 함수를 provider 하는 중

export default CoinApp;
