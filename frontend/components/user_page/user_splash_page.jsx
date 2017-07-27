import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SongsIndexItem from '../songs/songs_index_item';


class UserSplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.setProfilePic = this.setProfilePic.bind(this);
    this.setCoverPic = this.setCoverPic.bind(this);
  }

  setProfilePic(e) {
    let formData = new FormData();
    formData.append("user[image]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  setCoverPic(e) {
    let formData = new FormData();
    formData.append("user[coverpic]", e.currentTarget.files[0]);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  componentDidMount(){
   this.props.requestSingleUser(parseInt(this.props.match.params.userId))
   .then(()=> {
     this.props.requestSongsByUser(parseInt(this.props.match.params.userId));
   });
 }

 componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(parseInt(nextProps.match.params.userId))
      .then(()=> {
        this.props.requestSongsByUser(parseInt(nextProps.match.params.userId));
      });
    }
  }

  render() {
    console.log(this.props);
    const { user, currentUser, songs, receiveSingleSong } = this.props;
    let songList;
    let songListHeader;
    let editProfPicButton;
    let editCoverPicButton;
    if (!this.props.user) {
      return null;
    }
    const profilePic = user.profile_pic_url;
    const coverPic = user.cover_pic_url;


    if (this.props.songs.length > 0) {
      songList = songs.map((song, idx) =>
      (<SongsIndexItem key={`song-${idx}`} song={song} receiveSingleSong={receiveSingleSong}/>));
      } else {
        songList = <div className='no-songs'><h3>{this.props.user.username} has no songs.</h3>
        </div>;
      }

      if (user.id === currentUser.id) {
            editProfPicButton =
            <label htmlFor='prof-upload'>
              Update Photo
              <input type="file"
                onChange={this.setProfilePic}
                id='prof-upload'
                style={{'display': 'none'}}/>
            </label>;

            editCoverPicButton =
            <label htmlFor='cover-upload'>
              Update Cover Photo
              <input type="file"
                onChange={this.setCoverPic}
                id='cover-upload'
                style={{'display': 'none'}}/>
            </label>;
          }

        const bannerPictureStyle = {
          height: '100%',
          width: '100%',
          backgroundImage: `url(${coverPic})`
        };

    return(
      <div className="overall-user-page">
        <div className="user-page">
          <div className="header-user-page">

            <div className="banner" style={bannerPictureStyle}>
              <div className="between-left-middle">
                <div className="header-left">
                  <div className="header-top">
                    <img className="prof-pic" height="170" width="170" src={profilePic} alt={user.username} />

                  </div>

                  <div>
                    {editProfPicButton}
                  </div>
                </div>
                <div>
                  <text>{user.username}</text>
                </div>
              </div>



              <div className="header-right">
                {editCoverPicButton}
              </div>
            </div>

          </div>
          <div className="songs-user-page">
            <br />
            <h2>Tracks</h2>
              <br />

            {songList}
          </div>
        </div>


      </div>
    );


  }

}

export default UserSplashPage;
