import AppLayout from "./components/AppLayout";
import MainPage from "./components/main/MainPage";
import ModalProvider from "./provider/ModalProvider";

const CoinApp = () => {
  return (
    <ModalProvider>
      <AppLayout>
        <MainPage />
      </AppLayout>
    </ModalProvider>
  );
};

export default CoinApp;
