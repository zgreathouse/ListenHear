import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import CommentIndexItem from './comment_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.setBody = this.setBody.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.requestCommentsBySong(this.props.match.params.songId);
  }

  componentWillUnmount(){
    this.props.clearCommentErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(merge({}, this.state, {song_id: this.props.match.params.songId}))
    .then(()=> {
      this.setState({body: ''});
    });
  }

  setBody(e){
    this.setState({ body: e.target.value });
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>

          {this.props.errors.map((error, idx) => (
            <li key={`${idx}`}>{error}</li>
          ))}
        </ul>
      );
    }

  }


  render(){
    const { comments } = this.props;
    let allComments = comments.map((comment, idx) => (
      <CommentIndexItem key={`comment-${idx}`} comment={comment} />
    ));

    if (allComments.length === 0) {
      allComments = <div>No comments...<br/></div>;
    }

    return(
      <div className="comment-form-container">
        <div className="comment-form">
          <form onSubmit={this.handleSubmit}>
              <input className="comment-input"
                value={this.state.body}
                onChange={this.setBody}
                placeholder="Write a Comment" />
              <input className='comment-submit' type='submit' value='Submit' />
              <br/>
              {this.renderErrors()}
          </form>
        </div>

        <section className="full-comments-section">
          <div className="song-artist">
            Artist Picture
            <br/>
            Artist Name
          </div>

          <div>
            <ul className='comment-list'>
              { allComments }
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default CommentsIndex;
