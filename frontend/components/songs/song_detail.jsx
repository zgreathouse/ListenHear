import React from 'react';
import { withRouter } from 'react-router';

class SongDetail extends React.Component {

  componentDidMount(){
    this.props.fetchSong(this.props.match.params.songId);
  }

  render() {
    // console.log(this.props);

    const { song } = this.props;
    if (!song) {
      return null
    }
    return (
      <section className="song-details">
        <h2>{song.title}</h2>
      </section>
    );
  }
}

export default SongDetail;
