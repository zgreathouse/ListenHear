import React from 'react';
import { Link } from 'react-router';
import merge from 'lodash/merge';

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
    const { comments, errors } = this.props;
    let trash;

    let allComments = comments.map((comment, idx) => {
      return <li className='comment-item' key={idx}>
        <div>
          <Link to={`/user/${comment.user_id}`}>
            <h4>{comment.user_username}</h4>
          </Link>
        </div>
        <div className='comment-info'>
          {comment.body}<br/>
        <span>{comment.time} ago&nbsp;</span>
        </div>
        </li>;
    });
    if (allComments.length === 0) {
      allComments = <div>No comments...<br/></div>;
    }
    debugger
    return(
      <div className="comment-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input className="comment-input"
            value={this.state.body}
            onChange={this.setBody}
            placeholder="Write a Comment" />
          <input className='comment-submit' type='submit' value='Submit' />
        </form>
        <br/>
        <br/>
        <ul className='comment-list'>
          {allComments}
        </ul>
      </div>
    );
  }
}

export default CommentsIndex;
