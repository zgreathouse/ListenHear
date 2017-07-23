import React from 'react';
import { withRouter } from 'react-router';
import SongIndexItem from './songs_index_item';


class SongIndex extends React.Component {

  componentDidMount(){
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;

    return (
      <div>
        <ul className="all-songs">
          {songs.map(song => <SongIndexItem key={song.id} songs={song} />)}
        </ul>
      </div>


    );
  }
}

export default SongIndex;
