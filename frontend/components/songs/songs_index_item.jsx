import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <li className="song-index-item">
        <Link to={`/songs/${song.id}`}>
          <img className="song-index-image" height="100" width="100" src={song.avatar} alt="cover-photo" />
        </Link>
      </li>
    );
  }

}

export default SongIndexItem;
