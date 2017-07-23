import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <img className="song-image" height="100" width="100" src={song.image} alt="cover-photo" />
      </li>
    );
  }

}

export default SongIndexItem;
