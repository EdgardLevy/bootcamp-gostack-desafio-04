import React from 'react';

import Comment from '../Comment'

import './styles.css'

function Post({ data }) {

  return (
    <>
      <div className="post-person">
        <img src={data.author.avatar} alt="avatar" />
        <label>{data.author.name}</label>
      </div>
      <label className='post-content'>{data.content}</label>
      {
        data.comments.map(comment => <Comment key={comment.id} data={comment} />)
      }

    </>
  )

}

export default Post
