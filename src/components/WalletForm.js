import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fecthCurrency, getCurrency } from '../redux/actions';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { currenciesDispach } = this.props;
    currenciesDispach();
  }

  handleChange = ({ target }) => {
    const { name } = target;
    this.setState(({
      [name]: target.value,
    }));
  }

  saveExpense = () => {
    const { value, description, currency, method, tag, id } = this.state;
    const { expensesState } = this.props;

    const expenseInfo = {
      id,
      value,
      description,
      currency,
      method,
      tag,
    };
    expensesState(expenseInfo);
    this.setState({
      value: '',
      description: '',
      id: id + 1,
    });
  }

  updateExpenses = () => {
    const { expenses, idToEdit, updateExpensesOnStore, editorMode } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === idToEdit) {
        expense.value = value;
        expense.description = description;
        expense.currency = currency;
        expense.method = method;
        expense.tag = tag;
      }
      return expense;
    });

    updateExpensesOnStore(updatedExpenses);
    editorMode();
  }

  render() {
    const { currenciesState } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            Despesa
            <input
              type="number"
              name="value"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
              placeholder="Insira um valor"
              id="value-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <input
              type="text"
              name="description"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
              placeholder="Descrição"
              id="description-input"
            />
          </label>
          Moeda
          <select
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
            placeholder="Insira um valor"
          >
            {(currenciesState).map((option) => (
              <option
                key={ option }
              >
                {option}
              </option>))}
          </select>
          <select
            name="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            Forma de pagamento
            <option>
              Dinheiro
            </option>
            <option>
              Cartão de crédito
            </option>
            <option>
              Cartão de débito
            </option>
          </select>

          <select
            name="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            categoria
            <option>
              Alimentação
            </option>
            <option>
              Lazer
            </option>
            <option>
              Trabalho
            </option>
            <option>
              Transporte
            </option>
            <option>
              Saúde
            </option>
          </select>
          <button
            type="button"
            onClick={ this.saveExpense }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesDispach: () => dispatch(fecthCurrency()),
  expensesState: (expenses) => dispatch(getCurrency(expenses)),
});
const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

WalletForm.propTypes = {
  currenciesDispach: PropTypes.func,
  currenciesState: PropTypes.objectOf(PropTypes.any),
  expensesState: PropTypes.func.isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
