import React, { useEffect, useState } from 'react';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className='user' style={{width:'50%'}}>
      <h2 >Post Titles</h2>
      <ol>
        {posts.map(post => (
          <li key={post.id} >
            {post.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PostList;
