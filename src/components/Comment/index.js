import React from 'react';
import './styles.css'
function Comment({ data }) {

  return (
    <>
      {console.log(data)}
      <div className='comment'>
        <div className="post-person">
          <img src={data.author.avatar} alt="avatar" />

        </div>
        <div className="details">
          <label>{data.author.name}</label>
          {data.content}
        </div>
      </div>

    </>
  )

}

export default Comment
