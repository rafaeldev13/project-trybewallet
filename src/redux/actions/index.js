// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';

const emailAction = (email) => ({
  type: ADD_EMAIL,
  payload: email,
});

export default emailAction;
