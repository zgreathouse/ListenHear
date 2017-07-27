import React from 'react';
import { withRouter } from 'react-router-dom';
import SongIndexItemContainer from './songs_index_item_container';



class SongIndex extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    const allSongs = songs.map((song, idx) => (
      <SongIndexItemContainer key={`song-${idx}`} song={ song } />
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

export default SongIndex;
