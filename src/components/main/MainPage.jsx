import React from 'react';
import styled from 'styled-components';
import Spacing from "../../ui/Spacing";
import CoinOverView from "./CoinOverview";
import TransactionList from "./TransactionList";
import TransactionListContainer from '../../containers/main/TransactionListContainer';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh; /* Viewport height */
  padding: 20px;
`;

const MainPage = () => {
  return (
    <CenteredContainer>
      <CoinOverView />
      <TransactionListContainer/>
    </CenteredContainer>
  );
}

export default MainPage;