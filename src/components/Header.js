import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  sumValue = () => {
    const { expenses } = this.props;
    const getSumValue = expenses.reduce(
      (acc, curr) => acc + curr.value * curr.exchangeRates[curr.currency].ask,
      0,
    );
    return getSumValue.toFixed(2);
  }

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
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
}.isRequired;

export default connect(mapStateToProps)(Header);
