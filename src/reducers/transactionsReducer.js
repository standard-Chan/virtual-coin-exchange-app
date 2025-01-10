import { SET_TRANSACTION_LIST } from "../actions/transactionActions";


const initState = {
  ids: [],
  entities: {},
};

const transactions = (state = initState, actions) => {
  console.log('action : ', actions);
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