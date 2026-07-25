
import React, { Component } from 'react';
import Post from './post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
             
                const posts = data.map(post => 
                    new Post(post.userId, post.id, post.title, post.body)
                );
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                this.componentDidCatch(error);
            });
    }

  
    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, errorInfo) {
        alert(`Error occurred: ${error.message}`);
        console.error('Error details:', error, errorInfo);
    }

    render() {
        return (
            <div className="posts-container">
                <h1>Blog Posts</h1>
                {this.state.posts.length === 0 ? (
                    <p>Loading posts...</p>
                ) : (
                    <div>
                        {this.state.posts.map(post => (
                            <div key={post.id} className="post-item">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Posts;