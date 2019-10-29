import React, { Component } from 'react';
import './styles.css';
import Post from '../../components/Post';

class PostList extends Component {
  state = {
    posts: []
  }

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Edgard Levy',
          avatar: 'https://avatars2.githubusercontent.com/u/48997332?s=400&u=9eba604e16824e19e38eda8f004a22ec3af7af07&v=4'
        },
        date: "25 Out 2019",
        content: "Euismod in pellentesque massa placerat duis ultricies lacus?",
        comments: [
          {
            id: 1,
            author: {
              name: "Lorem ispum",
              avatar: "https://api.adorable.io/avatars/90/1@adorable.png"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          },
          {
            id: 2,
            author: {
              name: "Ut enim ad",
              avatar: "https://api.adorable.io/avatars/90/2@adorable.png"
            },
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'sunt in culpa',
          avatar: 'https://api.adorable.io/avatars/90/3@adorable.png'
        },
        date: "25 Out 2019",
        content: "bla bla bla bla bla bla bla bla bla bla",
        comments: [
          {
            id: 1,
            author: {
              name: "Responser",
              avatar: "https://api.adorable.io/avatars/90/4@adorable.png"
            },
            content: "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        ]
      }
    ]
  }



  render() {
    return (
      <>
        <div className="post-list">
          {
            this.state.posts.map(post => <Post key={post.id} data={post} />)
          }
        </div>
      </>
    )
  }
}

export default PostList;
