import React from 'react';
import { Link } from 'gatsby';
import usePosts from '../hooks/use-posts'
import Layout from '../components/layout';

// import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  const posts = usePosts();

  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <p> Hello Frontend Masters!</p>
        <Link to="/about">Learn about me!</Link> <br />
        <Link to="/contact">Contact me!</Link>

        <h2>Blog Posts!</h2>
        {posts.map(post => (
          <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </Layout>
  );
};

export default Index;
