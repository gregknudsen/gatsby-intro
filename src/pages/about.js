import React from 'React';
import { Link } from 'gatsby'
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div>
      <h1>About Me</h1>
      <p>This is my personal website</p>
    </div>
    <br />
    <br />
    <br />
    <Link to="/">&larr; Back to home</Link>
  </Layout>
)


