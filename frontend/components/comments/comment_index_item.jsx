import React from 'react';
import { Link } from 'react-router';


class CommentIndexItem extends React.Component {

  render(){
    const { comment } = this.props;
    return(
      <li className='comment-item'>
        <div>
          <Link to={`/user/${comment.user_id}`}>
            <h4>{comment.user_username}</h4>
          </Link>
        </div>

        <div className='comment-info'>
          {comment.body}<br/>
        <span>{comment.time} ago&nbsp;</span>
        </div>

      </li>
    );
  }
}

export default CommentIndexItem;
