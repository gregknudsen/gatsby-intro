import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p> Hello Frontend Masters!</p>
      <Link to="/about">Learn about me!</Link> <br />
      <Link to="/contact">Contact me!</Link>
    </div>
  </Layout>
  )
