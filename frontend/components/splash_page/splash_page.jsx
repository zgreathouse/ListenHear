import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';
import RootPageIndexContainer from '../root_page_index/root_page_index_container';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.demoSignIn = this.demoSignIn.bind(this);
  }

  demoSignIn(signin, e) {
    e.preventDefault();
    const demoUser = {username: 'guest', password: 'password1'};
    this.props.signin({user: demoUser});
  }

  render(signin) {
    return (
      <section className="signin-signup">
        <nav className="listen-here-logo">
          <h2 className="logo">ListenHear</h2>
        </nav>

        <nav className="signin-signup-buttons">
          <button className="guest" onClick={ (e) => this.demoSignIn(signin, e) }>Continue as Guest</button>
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

        <section className="root-page-index">
          <RootPageIndexContainer/>
        </section>
      </section>
    );
  }
}



export default SplashPage;
