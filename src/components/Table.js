import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            <button
              type="button"
              data-testid="edit-btn"
            >
              Editar
            </button>
            /
            <button
              type="button"
              data-testid="delete-btn"
            >
              Excluir
            </button>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
