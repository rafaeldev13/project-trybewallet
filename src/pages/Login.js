import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      disable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => { this.isDisabledButton(); });
  };

  isDisabledButton = () => {
    const { email, password } = this.state;
    const emailValided = /\S+@\S+\.\S+/;
    const minCharacters = 6;

    if (password.length >= minCharacters && emailValided.test(email)) {
      this.setState({
        disable: false,
      }, () => {});
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  clickButton = (e) => {
    const { history, addUserDispatch } = this.props;
    const { email } = this.state;
    addUserDispatch(email);
    e.preventDefault();
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <label
            htmlFor="password"
          >
            Password:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              onChange={ this.handleChange }
              value={ password }
              placeholder="Password"
            />
          </label>
          <button
            type="button"
            disabled={ disable }
            onClick={ this.clickButton }
            data-testid="button-input"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserDispatch: (payload) => dispatch(emailAction(payload)),
});

Login.propTypes = {
  addUserDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
