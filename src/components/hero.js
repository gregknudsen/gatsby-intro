import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStatucQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/pittsburgh.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;
  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vh - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1pm 3px #eeddff66;
    font-size: 2.25rem;
  }

  p, a {
    color: #222,
    margin-top: 0;
  }

  a {
    margin-top: 0;
  }
`

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Frontend Masters + Gatsby! &hearts;</h1>
        <p>Hello, Pittsburgh! <Link to="/about/">Learn about me &rarr;</Link></p>
      < /TextBox>
    </ImageBackground>
  );
};

export default Hero;