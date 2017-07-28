import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import UploadFormContainer from '../upload_form/upload_form_container';

const customStyles = {
  content : {
    top              : '50%',
    left             : '50%',
    right            : 'auto',
    bottom           : 'auto',
    marginRight      : '-50%',
    transform        : 'translate(-50%, -50%)',
    width            : '800px',
    height           : '450px',
  }
};

class UploadModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    let formType;
    return (

        <div>
          <button className="update-button" onClick={this.openModal}>Upload</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Upload Modal">
              <UploadFormContainer type={this.props.type}
                song={this.props.song}
                closeModal={this.closeModal}
                user={this.props.id} />
          </Modal>
        </div>
    );
  }
}

export default UploadModal;


// <div>
//   {this.props.type === "upload" ?

// : <div>
// <button className="auth-buts" onClick={this.openModal}>Edit Your Song</button>
//   <Modal
//   isOpen={this.state.modalIsOpen}
//   onRequestClose={this.closeModal}
//   style={customStyles}
//   contentLabel="Upload Modal">
//   <UploadFormContainer type={this.props.type}
//                      song={this.props.song}
//                      closeModal={this.closeModal}
//                      user={this.props.id} />
// </Modal>
// </div>
//     }
//
// </div>
