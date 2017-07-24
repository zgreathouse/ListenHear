import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  render() {
    const { song } = this.props;

    return (
      <div className='overall-song-index-item'>
        <li>{ song.title }</li>
      </div>

    );
  }


}

export default SongIndexItem;


//
// <Link to={`/songs/${song.id}`}><li className="song-index-item">
//   <Link to={`/songs/${song.id}`}>
//     <img className="song-index-image" height="100" width="100" src={song.title} alt="cover-photo" />
//   </Link>
//   <ul>
//     <li className="song-title">{ song.title }</li>
//     <li className="song-username">{ song.user.username }</li>
//   </ul>
// </li></Link>
