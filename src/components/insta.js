import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <div>
        { instaPhotos.map(photo => {
          <a
            href={`https://instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 1px 1px 3px #ddd;
            `}
            ></a>
        })}
      </div>
      <a href={`https://instgram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;