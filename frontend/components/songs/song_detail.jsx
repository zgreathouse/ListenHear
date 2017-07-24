import React from 'react';
import { withRouter } from 'react-router';
import SongIndexItem from './songs_index_item';

class SongDetail extends React.Component {

  componentDidMount(){
    this.props.fetchSong();
  }

  render() {
    return (

    );
  }
}

export default SongDetail;
