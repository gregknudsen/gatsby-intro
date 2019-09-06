import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStatucQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/pittsburgh.jpg')
`

const Hero = () => {
  return (
    <ImageBackground>
      <h1>Frontend Masters + Gatsby! &hearts;</h1>
      <p>Hello, Minnesota! <Link to="/about/">Learn about me &rarr;</Link></p>
    </ImageBackground>
  );
};

export default Hero;