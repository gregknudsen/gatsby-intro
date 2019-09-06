import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global 
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: sans-serif;
            font-size: 18px;
            line-height: 1.4;
            > div {
              margin-top: 0;
            }

            h1,h2,h3,h4,h5,h6 {
              color: #222;
              line-height: 1.1;
              + * {
                margin-top: 0.5 rem;
              }
            }

            strong {
              color: #222;
            }

            li {
              margin-top: 0.25rem;
            }
          }

<<<<<<< HEAD
        `} 
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
        margin: 2rem auto 4rem;
        max-width: 90vw;
        width: 550px;
        `}
=======
        `} />
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header />
        <main
          css={css`
            margin: 2rem auto 4rem;
            max-width: 90vw;
            width: 550px;
          `}
>>>>>>> 778db745c1565d6f55daa2be4e8a73cea633048f
      >
          {children}
        </main>
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 778db745c1565d6f55daa2be4e8a73cea633048f
export default Layout;

