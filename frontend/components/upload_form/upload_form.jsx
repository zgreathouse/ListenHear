import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      avatar: '',
      image_url: '',
      track: '',
      artist_id: this.props.id};
    if (this.props.song) {
      this.state = this.props.song;
    }
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.setImage = this.setImage.bind(this);
    this.setSong = this.setSong.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
   return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="upload-error" key={error}>{error}</li>);
        })
      );
    }
  }

  setImage(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ avatar: file, image_url: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  setSong(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ track: file });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[description]", this.state.description);
    formData.append("song[artist_id]", this.state.artist_id);
    formData.append("song[avatar]", this.state.avatar || this.state.image_url);
    formData.append("song[track]", this.state.track);
    formData.append("song[genre]", this.state.genre);

    this.props.createSong(formData).then(data => {
      this.props.history.push(`/songs/${data.song.id}`);
    });
  }

  render(){
    return(
      <div className="upload-form">
          <div>{this.renderErrors()}</div>
        <form className="upload-form-items">

          <div className="upload-header-flex">
            <h1 className="upload-header">ListenHear</h1>
          </div>

          <div className="upload-form-left">
            {this.state.image_url.length > 0 ? <img height="150" width="150" src={this.state.image_url}
               alt="album-art" /> : <div></div>}
            <br/>
            <div className="upload-input">
              <p>Choose Cover Art</p>
              <input className="choose_file_buttons" type="file" onChange={this.setImage}/>
            </div>

            <br/>
            <br/>

            <div className="upload-input">
              <p>Choose Song</p>
              <input className="choose_file_buttons" type="file" onChange={this.setSong}/>
            </div>
          </div>
          <br/>
          <div className='upload-form-right'>

            <br/>
            <input autoFocus
                  type="text"
                  value={this.state.title}
                  placeholder="Title"
                  onChange={this.update('title')}
                  className="upload-input"
                />
            <br/>
            <input
                  type="text"
                  value={this.state.genre}
                  placeholder="Genre"
                  onChange={this.update('genre')}
                  className="upload-input"
                />
            <br/>
            <textarea placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              cols="60" rows="3"
              className="upload-input-description"></textarea>
            <br/>

            <br/>
          </div>

            <div className="upload-button-flex">
              <button className="upload-button" onClick={this.handleSubmit}>Upload</button>
            </div>

        </form>
      </div>
    );
  }
}

export default withRouter(UploadForm);
