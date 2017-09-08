import React from 'react';
import { withRouter } from 'react-router-dom';
import FrontPageSongIndexItem from './front_page_song_index_item';

class FrontPageSongIndex extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const { songs,
      playing,
      currentSong,
      assignCurrentSong,
      playAudioPlayer,
      pauseAudioPlayer } = this.props;

    const allSongs = songs.map((song, idx) => (
      <FrontPageSongIndexItem key={`song-${idx}`} song={ song }
        playing={playing}
        currentSong={currentSong}
        assignCurrentSong={assignCurrentSong}
        playAudioPlayer={playAudioPlayer}
        pauseAudioPlayer={pauseAudioPlayer}
        />
    ));

    return (
        <div className="front-page-all-songs-flex">
          <ul className="front-page-all-songs">
            { allSongs }
          </ul>
        </div>
    );
  }
}

export default FrontPageSongIndex;
