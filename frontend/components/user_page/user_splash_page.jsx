import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongsIndexItem from '../songs/songs_index_item';


class UserSplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.setProfilePic = this.setProfilePic.bind(this);
    this.setCoverArt = this.setCoverArt.bind(this);
  }

  setProfilePic(e) {
    let formData = new FormData();
    formData.append("user[avatar]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  setCoverArt(e) {
    let formData = new FormData();
    formData.append("user[cover_art]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  componentDidMount(){
    this.props.requestUser(parseInt(this.props.match.params.userId))
    .then(()=> {
      this.props.requestSongsByUser(parseInt(this.props.match.params.userId));
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestUser(parseInt(nextProps.match.params.userId))
      .then(()=> {
        this.props.requestSongsByUser(parseInt(nextProps.match.params.userId));
      });
    }
  }

  render() {
    const { user, currentUser, songs, receiveSong } = this.props;
    let songList;
    let songListHeader;
    let editProfPicButton;
    let editCoverArtButton;
    if (!this.props.user) {
      return null;
    }
    const profilePic = user.image_url;
    const coverArt = user.cover_art_url;


    if (this.props.songs.length > 0) {
      songList = songs.map((song, idx) =>
      (<SongsIndexItem key={`song-${idx}`} song={song} receiveSong={receiveSong}/>));
      } else {
        songList = (<div className='no-songs'>
          <h3>{this.props.user.username} hasn't uploading any songs yet.</h3>
        </div>);
      }

    if (currentUser && user.id === currentUser.id) {
      editProfPicButton =
        <label htmlFor='prof-upload'>
          Update Photo
          <input type="file"
            onChange={this.setProfilePic}
            id='prof-upload'
            style={{'display': 'none'}}/>
        </label>;

      editCoverArtButton =
        <label htmlFor='cover-upload'>
          Update Cover Photo
          <input type="file"
            onChange={this.setCoverArt}
            id='cover-upload'
            style={{'display': 'none'}}/>
        </label>;
    }

    const bannerPictureStyle = {
      backgroundImage: `url(${coverArt})`
    };

    return(

      <div className="user-page-flex">
        <div className="banner-username">
          {user.username}
        </div>
        <div className="user-page">

          <div className="header-user-page">

            <div className="banner" style={bannerPictureStyle}>
              <div className="between-left-middle">
                <div className="profile-pic-section">

                  <div className="profile-pic">
                    <img className="user-profile-pic" height="170" width="170" src={profilePic} alt={user.username} />
                  </div>

                  <div className="prof-pic-upload">
                    {editProfPicButton}
                  </div>

                </div>
              </div>
            </div>

          </div>
          <div className="cover-pic-upload">
            {editCoverArtButton}
          </div>
          <div className="user-song-index">
            <br/>
            <h2 className="user-song-index-header">Songs</h2>
            <br/>
            <div className="user-page-song-index">
              <ul >
                {songList}
              </ul>
            </div>
          </div>
        </div>


      </div>
    );


  }

}

export default UserSplashPage;
