import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup">Create Account</Link>;
    } else {
      return <Link to="/signin">Sign In</Link>;
    }
  }

  submitButtonText() {
    if (this.props.formType === 'signin') {
      return "Sign In";
    } else {
      return "Create Account";
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <ul key={`error-${i}`} className='errors'>
            {error}
          </ul>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="signin-form-container">
        <form onSubmit={this.handleSubmit} className="signin-form-box">
          <br/>
          <div className="signin-form">
            <h1 className="listen-here-logo">ListenHere</h1>
            <br/>
            <label>
              <input type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="signin-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>
            <br/>
            {this.renderErrors()}
            <input
              className='submit-button'
              type="submit"
              value={this.props.formType === 'signin' ? "Sign In" : "Create Account"} />
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
