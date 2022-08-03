import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { emailProps } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { emailProps }
        </p>
        <p data-testid="total-field">
          0
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
});

Header.propTypes = {
  emailProps: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
