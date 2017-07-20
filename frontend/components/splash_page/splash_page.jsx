import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.demoSignIn = this.demoSignIn.bind(this);
  }

  demoSignIn(signin, e) {
    e.preventDefault();
    const demoUser = {username: 'guest', password: 'password'};
    this.props.signin({user: demoUser});
  }

  render(signin) {
    return (
      <header className="signin-signup">
        <nav className="listen-here-logo">
          <h2 className="logo">ListenHear</h2>
        </nav>

        <nav className="signin-signup-buttons">
          <button className="guest" onClick={ (e) => this.demoSignIn(signin, e) }>Guest</button>
          &nbsp;
          <AuthModal formType="signin"/>
          &nbsp;
          <AuthModal formType="signup"/>
        </nav>

        <div className="welcome-message">
          <div>
          <p className="welcome">Connect on ListenHear</p>
          <p className="message">
            Discover, stream, and share a constantly expanding <br/>mix of music
                from emerging and major <br/>artists around the world</p>
          </div>
        </div>
      </header>
    );
  }
}



export default SplashPage;
