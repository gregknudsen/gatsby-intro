import React from 'react';
import { graphql } from 'gatsby'
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import UsePosts from '../hooks/use-posts';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug} }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
)
};

export default PostTemplate;