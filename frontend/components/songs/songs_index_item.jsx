import React from 'react';
import { Link } from 'react-router-dom';


class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAssignCurrentSong = this.handleAssignCurrentSong.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
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

  render() {
    const { song } = this.props;
    if (!song) {
      return null;
    }

    return (
      <div className='all-song-items'>
        <img className="song-image" height="150" width="150" src={song.image_url} alt="cover-photo" />
        <li className='song-item'>

          <div className="song-play-button">
            {!this.props.playing || this.props.currentSong !== song.id ?
              <div>
                <div className="button-box">
                  <img className="play-button"
                    onClick={this.handleAssignCurrentSong}
                    src="https://lh3.googleusercontent.com/puM-xku2myy_25xZvMwnx_1Qd_0vH-zavm0Fz73nHElIioMYt7Rh12GYD-GU2bHpiiM=w300">
                  </img>
                </div>
              </div> : <div>
                <div className="button-box">
                  <img className="pause-button"
                    onClick={this.handlePauseClick}
                    src="https://www.r-m-n.com/image/img/skin/jrAudioPro/button_player_pause.png">
                  </img>
                </div>
              </div>
            }
          </div>
          <section className="play-and-details">
            <div className="artist-title">
              { song.user ?
              <div className="song-item-artist">{ song.user.username }
              </div> : <div></div>
              }
              <Link to={`/songs/${song.id}`} className="song-item-title" >{ song.title }</Link>
            </div>

            &nbsp;
            <div className="song-item-genre">{ song.genre }</div>
          </section>
          <br/>
          <br/>
          <br/>
          <br/>
        </li>
      </div>

    );
  }
}

export default SongIndexItem;

// <Link to={`/songs/${song.id}`}><li className="song-index-item">
//   <Link to={`/songs/${song.id}`}>
//     <img className="song-index-image" height="100" width="100" src={song.title} alt="cover-photo" />
//   </Link>
//   <ul>
//     <li className="song-title">{ song.title }</li>
//     <li className="song-username">{ song.user.username }</li>
//   </ul>
// </li></Link>


//
