import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormSignInContainer from '../session_form/session_form_signin_container';
import SessionFormSignUpContainer from '../session_form/session_form_signup_container';

const customStyles = {
  content : {
    top              : '50%',
    left             : '50%',
    right            : 'auto',
    bottom           : 'auto',
    marginRight      : '-50%',
    transform        : 'translate(-50%, -50%)',
    width            : '400px',
    height           : '450px',
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  // afterOpenModal() {
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let formType;

    return (
      <div>
        {this.props.formType === "signup" ?
          <div>
          <button onClick={this.openModal} className='signup-button'>Create Account</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              // onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={this.closeModal}> X </button>
              <SessionFormSignUpContainer formType={formType}/>
            </Modal>
          </div> : <div>
            <button onClick={this.openModal} className='signin-button'>Sign In</button>
              <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <button onClick={this.closeModal}> X </button>
                <SessionFormSignInContainer formType={formType}/>
              </Modal>
          </div>}
      </div>
    );
  }
}

export default AuthModal;
