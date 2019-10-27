import React from 'react';
import './styles.css'
function Comment({ data }) {

  return (
    <>
      {console.log(data)}
      <h5>{data.content}</h5>

      <div className="comment-author">
        <img src={data.author.avatar} alt="avatar" />
        <label>{data.author.name}</label>
      </div>
      <label className='comment-content'>{data.content}</label>

    </>
  )

}

export default Comment
