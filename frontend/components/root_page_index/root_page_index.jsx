import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class RootPageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(signin) {
    return (
      <section className="root-page-index">
        <p className="root-index-header">
          Hear what’s trending for free in the ListenHear community
        </p>

        {/* <img className="song-image" height="150" width="150" src={song.image_url} alt="cover-photo" /> */}
      </section>
    );
  }
}

export default RootPageIndex;
