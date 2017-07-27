import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentsIndexContainer from '../comments/comments_index_container';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);

    this.handleAssignCurrentSong = this.handleAssignCurrentSong.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  handlePlayClick () {
    this.props.playAudioPlayer();
  }

  handlePauseClick() {
    this.props.pauseAudioPlayer();
  }

  handleAssignCurrentSong () {
    const { song } = this.props;
    this.props.assignCurrentSong(song.id);
  }

  handleDelete(e) {
    e.preventDefault();
    var result = confirm("Are you sure you want to delete this song?");
    if (result) {
      this.props.deleteSong(this.props.song.id)
        .then(data => this.props.history.push(`/home`));
      // this.props.fetchSongs()
    }
  }

  render() {
    const { song } = this.props;
    if (!song) {
      return null
    }

    let deleteButton;
    if (this.props.currentUser && this.props.currentUser.id === song.artist_id) {
      deleteButton = <button
        className='delete-button'
        onClick={this.handleDelete}>Delete Song</button>;
    }

    return (
      <div className="song-details-page">
        <section className="song-details">
          <div className="show-page-song-play-button">
            {!this.props.playing || this.props.currentSong !== song.id ?
              <div>
                <div className="show-page-button-box">
                  <img className="show-page-play-button"
                    onClick={this.handleAssignCurrentSong}
                    src="https://lh3.googleusercontent.com/puM-xku2myy_25xZvMwnx_1Qd_0vH-zavm0Fz73nHElIioMYt7Rh12GYD-GU2bHpiiM=w300">
                  </img>
                </div>
              </div> : <div>
                <div className="show-page-button-box">
                  <img className="show-page-pause-button"
                    onClick={this.handlePauseClick}
                    src="https://www.r-m-n.com/image/img/skin/jrAudioPro/button_player_pause.png">
                  </img>
                </div>
              </div>
            }
          </div>

          {/*description*/}

          <div className="song-detail-title-artist">
            <div className="song-detail-artist">
              {song.user.username}
            </div>
            <div className="song-detail-title">
              {song.title}
            </div>

            {/*progress bar*/}
          </div>

          <div className="image-show-page">
            <img className="show-page-song-image" height="290" width="290" src={song.image_url} alt="cover-photo" />
          </div>
        </section>

        <div className="delete-button-flex">
          <img className='delete-button' onClick={this.handleDelete}
            src="https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/dustbin-512.png">
          </img>
        </div>

        <section className="comments-section">

          <div>
            {/*artist-picture*/}
          </div>
          <div>
            <CommentsIndexContainer/>
          </div>
        </section>
      </div>
    );
  }
}

export default SongDetail;
