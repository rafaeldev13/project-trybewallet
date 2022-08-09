import React from "react";
import App from '../App'
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith'
import Wallet from "../pages/Wallet";
import userEvent from "@testing-library/user-event";

describe('Testando o componente Login', () => {

    it('Testa se o campo de email e senha aparecem na tela', () => {
        renderWithRouterAndRedux(<App />);

        const email = screen.getByTestId('email-input');
        const password = screen.getByTestId('password-input');
        ;
        const button = screen.getByRole('button', { name: /entrar/i, });

        expect(button).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument()
    })

    it('Verifica se o botão é habilitado as preencher os inputs', () => {
        const { history } = renderWithRouterAndRedux(<App />);

        const email = screen.getByTestId('email-input');
        userEvent.type(email, 'alguem@teste.com')

        const password = screen.getByTestId('password-input');
        userEvent.type(password, '123456')

        const button = screen.getByRole('button', { name: /entrar/i, });
        userEvent.click(button)

        expect(history.location.pathname).toBe('/carteira')

    })
});



describe('Testando a Página Wallet', () => {
    test('Testando se os inputs estão sendo renderizado', () => {
        renderWithRouterAndRedux(<Wallet />);
    
        const DespesasTotais = screen.getByTestId("total-field");
        const BRL = screen.getByTestId("header-currency-field");
        const Despesa = screen.getByTestId("value-input");
        const Descrição = screen.getByTestId("description-input");
        const Moeda = screen.getByTestId("currency-input");
        const FormaDePagamento = screen.getByTestId("method-input");
        const categoria = screen.getByTestId("tag-input");
        const button = screen.getByRole('button');
        
        expect(DespesasTotais).toBeInTheDocument();
        expect(BRL).toBeInTheDocument();
        expect(Despesa).toBeInTheDocument();
        expect(Descrição).toBeInTheDocument();
        expect(Moeda).toBeInTheDocument();
        expect(FormaDePagamento).toBeInTheDocument();
        expect(categoria).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
    test('Testa se é renderizado todas as informações na Tabela', () => {
        renderWithRouterAndRedux(<Wallet />);
        const description = screen.getByTestId('description-input');
        const value = screen.getByTestId('value-input');
    
        userEvent.type(description, 'trybe');
        userEvent.type(value, '2000');
    
        const button = screen.getByRole('button', /Adicionar despesa/i);
        userEvent.click(button);
        
    });
});