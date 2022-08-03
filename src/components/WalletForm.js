import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fecthCurrency } from '../redux/actions';

class WalletForm extends React.Component {
  componentDidMount() {
    const { currenciesDispach } = this.props;
    currenciesDispach();
  }

  render() {
    const { currenciesState } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="value-input">
            <input
              type="text"
              name="text"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="description-input">
            <input
              type="text"
              name="text"
              data-testid="description-input"
            />
          </label>
          <select name="currency" data-testid="currency-input">
            {(currenciesState).map((option) => (
              <option
                key={ option }
              >
                {option}
              </option>))}
          </select>
          <select
            name="currency"
            data-testid="method-input"
          >
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
            name="currency"
            data-testid="tag-input"
          >
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  currenciesDispach: () => dispatch(fecthCurrency()),
});
const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies,
});

WalletForm.propTypes = {
  currenciesDispach: PropTypes.func,
  currenciesState: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
