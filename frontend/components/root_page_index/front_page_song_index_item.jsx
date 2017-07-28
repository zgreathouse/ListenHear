import React from 'react';
import { Link } from 'react-router-dom';


class FrontPageIndexItem extends React.Component {

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
      <div className='container'>
        <img className="image" src={song.image_url} alt="cover-photo" />
        <li className='front-song-item'>

          <div className="middle">
            {!this.props.playing || this.props.currentSong !== song.id ?
              <div>
                <div className="text">
                  <img className="play-button"
                    onClick={this.handleAssignCurrentSong}
                    src="https://lh3.googleusercontent.com/puM-xku2myy_25xZvMwnx_1Qd_0vH-zavm0Fz73nHElIioMYt7Rh12GYD-GU2bHpiiM=w300">
                  </img>
                </div>
              </div> : <div>
                <div className="text">
                  <img className="pause-button"
                    onClick={this.handlePauseClick}
                    src="https://www.r-m-n.com/image/img/skin/jrAudioPro/button_player_pause.png">
                  </img>
                </div>
              </div>
            }
          </div>

          <div className="front-artist-title">
            <div className="front-song-item-artist">{ song.user.username }</div>
            <br/>
            <div className="front-song-item-title" >{ song.title }</div>
          </div>
        </li>
      </div>

    );
  }
}

export default FrontPageIndexItem;
