import React from 'react';
import { Link } from 'react-router-dom';


class CommentIndexItem extends React.Component {

  render(){
    const { comment } = this.props;
    console.log(comment);

    return(
      <li className='comment-item'>
        <div>
          <Link to={`/user/${comment.user_id}`}>
            <p>{comment.user_username}</p>
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
