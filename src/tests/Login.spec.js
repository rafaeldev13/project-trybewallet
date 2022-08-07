import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';

import App from '../App';
import Login from '../pages/Login';

describe('Testando a página de Login', () => {
it('Testa se a pagina redenriza todos os componentes', () => {
renderWithRedux(<Login />);
const email = screen.getByTestId('email-input');
const password = screen.getByTestId('password-input');
const button = screen.getByTestId('button-input');
expect(email).toBeInTheDocument();
expect(password).toBeInTheDocument();
expect(button).toBeInTheDocument();
});

it('Testa se os inputs do Login estão alterando a store', () => {
const { store } = renderWithRouterAndRedux(<App />);

const email = screen.getByTestId('email-input');
const password = screen.getByTestId('password-input');
const button = screen.getByTestId('button-input');

userEvent.type(email, 'rafael.13.alencar13@gmail.com');
userEvent.type(password, '123456')
userEvent.click(button);

expect(store.getState().user.email).toBe('rafael.13.alencar13@gmail.com');
});

it('Testa se ao clicar no botão de Entrar a página é redirecionada para /carteira', () => {
const { history } = renderWithRouterAndRedux(<App />);

const email = screen.getByTestId('email-input');
const password = screen.getByTestId('password-input');
const button = screen.getByTestId('button-input');

userEvent.type(email, 'rafael.13.alencar13@gmail.com');
userEvent.type(password, '123456')
userEvent.click(button);

expect(history.location.pathname).toBe('/carteira');
});

it('É esperado que a função fetch não seja chamada ao redirecionar à página de Wallet', () => {
global.fetch = jest.fn();

renderWithRouterAndRedux(<App />);

const email = screen.getByTestId('email-input');
const password = screen.getByTestId('password-input');
const button = screen.getByTestId('button-input');

userEvent.type(email, 'brenoaraujo50@icloud.com');
userEvent.type(password, '598896')
userEvent.click(button);

expect(fetch).not.toHaveBeenCalled();
});
})