import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  sumValue = () => {
    const { expenses } = this.props;
    // const sumValue = 0;
    const getSum = expenses.reduce((acc, curr) => (acc + Number(curr.value)
   * Number(curr.exchangeRates[curr.currency].ask)), 0).toFixed(2);
    return getSum;
  }

  //   expenses.forEach((expense) => {
  //     const { currency } = expense;
  //     const currencyValue = expense.exchangeRates[currency].ask;
  //     sumValue += expense.value * currencyValue;
  //     console.log(currencyValue);
  //   });

  //   console.log(expenses);
  //   return sumValue.toFixed(2);
  // }

  render() {
    const { emailProps } = this.props;
    return (
      <header className="header">
        <p data-testid="email-field">
          { emailProps }
        </p>
        <p className="tag-p">Despesas Totais:</p>
        <p
          data-testid="total-field"
        >
          { this.sumValue()}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailProps: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailProps: propTypes.string,
  expenses: propTypes.arrayOf(propTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
