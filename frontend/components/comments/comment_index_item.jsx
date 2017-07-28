import React from 'react';
import { Link } from 'react-router-dom';


class CommentIndexItem extends React.Component {

  // handleDelete() {
  //
  // }
  // <img className='delete-comment-button' onClick={this.handleComment}
  //   src="https://cdn3.iconfinder.com/data/icons/gray-toolbar-4/512/dustbin-512.png">
  // </img>

  render(){
    const { comment } = this.props;

    return(
      <li className='comment-item'>
        <section>
        <div>
          <Link to={`/users/${comment.user_id}`}>
            <p>{comment.user_username}</p>
          </Link>
        </div>

        <div className='comment-info'>
          {comment.body}
        <br/>
        </div>
      </section>

        <div className="comment-time-flex">
          <span className="comment-time">{comment.time} ago&nbsp;</span>
        </div>

      </li>
    );
  }
}

export default CommentIndexItem;
