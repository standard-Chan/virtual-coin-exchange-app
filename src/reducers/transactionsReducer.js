import { SET_TRANSACTION_LIST } from "../actions/transactionActions";


const initState = {
  ids: [],
  entities: {},
};

// 받은 axios 데이터를 transaction 형식에 맞게 객체 재생성

const transactions = (state = initState, actions) => {
  
  const { type, payload } = actions;

  switch (type) {
    case SET_TRANSACTION_LIST:
      const ids = payload.map(entity => entity['id']);
      const entities = payload.reduce((finalEntities, entity) => ({
        ...finalEntities,
        [entity['id']]: entity,
      }), {});
      return { ...state, ids, entities };
    default:
      return state;
  }
}

export default transactions;