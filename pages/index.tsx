/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next 12 / MUI 5 / Emotion 11</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={css`
        padding: 100px;
      `}>
        <p>Hello there!</p>
        <Box
        css={css`
          border: 10px solid black;
        `}
          width="300px"
          height="300px"
          bgcolor="red"
          mt={10}
        />
      </main>
    </div>
  )
}

export default Home
