import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

// import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <div>
          <h2>Blog Posts!</h2>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post}/>
          ))}
        </div>
      </Layout>
    </>
  );
};
