// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const GET_COIN = 'GET_COIN';

export const emailAction = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const getCoinAction = (payload) => ({
  type: GET_COIN,
  payload,
});

export function fecthCurrency() {
  return (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      const coin = Object.keys(data);
      dispatch(getCoinAction(coin));
    });
}
