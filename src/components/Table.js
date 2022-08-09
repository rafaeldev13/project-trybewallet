import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editTable } from '../redux/actions';

class Table extends Component {
  render() {
    const { expenses, editTableStateProps } = this.props;
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
            { expenses.map((expense) => {
              const exchangeNumber = Number(expense.exchangeRates[expense.currency].ask);
              const getValue = Number(
                expense.exchangeRates[expense.currency].ask * expense.value,
              );

              return (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>{exchangeNumber.toFixed(2)}</td>
                  <td>{getValue.toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      onClick={ () => {
                        editTableStateProps(expense.id);
                      } }
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editTableStateProps: (id) => dispatch(editTable(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
