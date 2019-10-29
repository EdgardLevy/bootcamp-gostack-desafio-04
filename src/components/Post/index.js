import React from 'react';

import Comment from '../Comment'

import './styles.css'

function Post({ data }) {

  return (
    <>
      <div className="post">
        <div className="post-person">
          <img src={data.author.avatar} alt="avatar" />
          <div className="details">
            <label>{data.author.name}</label>
            <label>{data.date}</label>
          </div>

        </div>
        <label className='post-content'>{data.content}</label>
        {
          data.comments.map(comment => <Comment key={comment.id} data={comment} />)
        }
      </div>

    </>
  )

}

export default Post
