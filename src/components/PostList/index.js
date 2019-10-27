import React, { Component } from 'react';
import './styles.css';
import Post from '../../components/Post';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Edgard Levy',
          avatar: 'https://avatars2.githubusercontent.com/u/48997332?s=400&u=9eba604e16824e19e38eda8f004a22ec3af7af07&v=4'
        },
        date: "25 Out 2019",
        content: "Pessoal, alguém sabe se a Rocketset está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Fulano de tal',
          avatar: 'https://avatars2.githubusercontent.com/u/48997332?s=400&u=9eba604e16824e19e38eda8f004a22ec3af7af07&v=4'
        },
        date: "25 Out 2019",
        content: "bla bla bla",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars1.githubusercontent.com/u/2254731?s=400&v=4"
            },
            content: "Conteúdo do comentário"
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
