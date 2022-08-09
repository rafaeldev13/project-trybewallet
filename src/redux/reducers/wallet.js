// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_COIN, REMOVE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COIN:
    return {
      ...state,
      currencies: action.payload,
    };
  case 'GET_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expenses }],
    };
  case REMOVE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
