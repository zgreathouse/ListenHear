import React from 'react'
import ReactHowler from 'react-howler'
import ProgressBar from 'react-progressbar';
// requestAnimationFrame polyfill
import raf from 'raf';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { playing: props.playing,
      currentSong: props.currentSong };

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);
    this.renderSeekPos = this.renderSeekPos.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     playing: nextProps.audioPlayer.playing,
  //   });
  //   if(nextProps.audioPlayer.currentSong !== this.props.audioPlayer.currentSong){
  //     this.clearRAF();
  //   }
  //   this.setState({
  //     currentSong: nextProps.playback.currentTrack,
  //   });
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(!prevState.playing && this.state.playing && this.state.loaded){
  //     this.renderSeekPos();
  //   }
  // }


  renderSeekPos () {
    this.setState({
        seek: this.player.seek(),
        progress: (this.player.seek() / this.player.duration())
      });
      if (this.state.playing) {
        this._raf = raf(this.renderSeekPos);
      }
  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    });
    if (this.state.playing) {
      this.renderSeekPos();
    }
  }

  clearRAF () {
    raf.cancel(this._raf);
  }

  minutesSeconds(s) {
    return(s-(s%=60))/60+(9<s?':':':0')+s;
  }

  handlePlayClick () {
    this.props.playAudioPlayer();
  }

  handlePauseClick() {
    this.props.pauseAudioPlayer();
  }


  render () {
    const Line = ProgressBar.Line;

    const barOptions = {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: 'rgb(180,180,180)',
      trailWidth: 2,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#FFFFFF'},
      to: {color: 'rgb(215, 30, 58, .2)'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
    };

    return (
      <footer>
        {this.props.currentSong !== null ?
          <div className="audio-footer">
              <ReactHowler
                src={this.props.songs[this.props.currentSong].song_url}
                playing={this.props.playing}
                html5={true}
                // onLoad={this.handleOnLoad}
                // ref={(ref) => (this.player = ref)}
              />

            <div className="audio-footer-flex">
              {this.props.playing === false ?
                <div className="audio-footer-play-button">
                  <img className="footer-play-button"
                    onClick={this.handlePlayClick}
                    src="https://lh3.googleusercontent.com/puM-xku2myy_25xZvMwnx_1Qd_0vH-zavm0Fz73nHElIioMYt7Rh12GYD-GU2bHpiiM=w300">
                  </img>
                </div> : <div className="audio-footer-play-button">
                  <img className="footer-pause-button"
                    onClick={this.handlePauseClick}
                    src="https://www.r-m-n.com/image/img/skin/jrAudioPro/button_player_pause.png">
                  </img>
                </div>
              }
              &nbsp;
              &nbsp;
              <div className="footer-artist-title">
                <div className="footer-song-item-artist">
                  { this.props.songs[this.props.currentSong].user.username }
                </div>
                <div className="footer-song-item-title">
                  { this.props.songs[this.props.currentSong].title }
                </div>
              </div>
            </div>

            {/* <div className="progress-container">
              <span>{(typeof this.state.seek === 'number') ? this.minutesSeconds(this.state.seek.toFixed()) : '0:00'}</span>
              <Line progress={this.state.progress}
                options={barOptions}
                containerClassName={'progressbar-container'}/>
              <span>{(this.state.duration) ? this.minutesSeconds(this.state.duration.toFixed()) : '0:00'}</span>
            </div> */}
          </div> : <div></div> }
      </footer>
    )
  }
}

export default AudioPlayer;




/*
Props

prop	      default	  description
src		                The sources to the track(s) to be loaded for the sound (URLs or base64 data URIs). These should be in order of preference, howler.js will automatically load the first one that is compatible with the current browser. If your files have no extensions, you will need to explicitly specify the extension using the format property.
                      Updating the src prop on the fly will destroy any currently playing howler instance and create a new one with the new src. Updating other props while keeping the src the same will maintain the current howler instance.
preload	    true	    Automatically begin downloading the audio file when the react-howler is initiated.
playing	    true	    Set to true or false to pause or play the media.
                      Setting to true on initial load will play the audio immediately after it is loaded
loop	      false	    Set to true or false to enable/disable loop
mute	      false	    Set to true or false to mute/unmute current audio
volume	    1.0	      The volume of the specific howl, from 0.0 to 1.0
html5	      false	    Set to true to force HTML5 Audio. This should be used for large audio files so that you don't have to wait for the full file to be downloaded and decoded before playing.
format	    []	      howler.js automatically detects your file format from the extension, but you may also specify a format in situations where extraction won't work (such as with a SoundCloud stream).
onPlay	    noop	    Called when audio starts or resumes playing
onPause	    noop	    Called when audio is paused
onVolume	  noop	    Called when volume is changed
onStop	    noop	    Called when audio is stopped
onLoad	    noop	    Called when audio is loaded (buffered)
onLoadError	noop	    Called when an error occurs whilst attempting to load media
onEnd	      noop	    Called when media finishes playing

*/

// getHowler () {
//   this.player.howler
// }
//

//
// getSeek () {
//   this.player.seek()
// }
//
// setSeek () {
//   this.player.seek(0.5)
// }
