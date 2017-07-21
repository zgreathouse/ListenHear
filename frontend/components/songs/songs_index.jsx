import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class SongsIndex extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const { songs } = this.props;
    return (
      <section className="all-songs">
        <ul>
          <SongIndexItem />
        </ul>


      </section>
    );
  }
}

export default SongsIndex;
