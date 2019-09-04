import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Layout>
    <div>
      <h2> Hello Frontend Masters!</h2>
      <Link to="/about">Learn about me!</Link>
    </div>
  </Layout>
  )
