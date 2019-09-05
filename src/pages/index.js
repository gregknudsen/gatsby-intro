import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts'
// import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <p>Hello Frontend Masters!</p>
        <Link to="/about">Learn about me! &rarr;</Link> <br />
        <Link to = "/contact"> Contact me! & rarr;</Link>

        <h2>Blog Posts!</h2>
        {posts.map(post => (
          <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </div>
    </Layout>
  );
};
