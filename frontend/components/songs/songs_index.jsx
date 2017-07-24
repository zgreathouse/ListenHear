import React from 'react';
import { withRouter } from 'react-router';
import SongIndexItem from './songs_index_item';



class SongIndex extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    const allSongs = songs.map((song, id) => (<SongIndexItem key={`song-${id}`} song={song} />));

    return (
      <div>
        <ul className="all-songs">
          { allSongs }
        </ul>
      </div>


    );
  }
}

export default SongIndex;
