import React from 'react';
import { withRouter } from 'react-router-dom';
import FrontPageSongIndexItem from './front_page_song_index_item';



class FrontPageSongIndex extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    const allSongs = songs.map((song, idx) => (
      <FrontPageSongIndexItem key={`song-${idx}`} song={ song } />
    ));

    return (
      <div className="all-songs">
        <p className="song-index-header">Stream</p>
        <ul>
          { allSongs }
        </ul>
      </div>
    );
  }
}

export default FrontPageSongIndex;
