import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FrontPageSongIndexContainer from './front_page_song_index_container';


class RootPageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(signin) {
    return (
      <section className="root-page-index">
        <div>
          <p className="root-index-header">
            Hear what’s trending for free in the ListenHear community
          </p>
        </div>
        <div>
        <FrontPageSongIndexContainer/>
        </div>
        <div className="line">

        </div>
      </section>
    );
  }
}

export default RootPageIndex;
