import * as React from 'react';
import { NextPage } from 'next';

import dynamic from 'next/dynamic';
import Head from 'next/head';

const HomeContainer = dynamic(
  () => import('../containers/home/HomeContainer'),
  { ssr: false }
);

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>🐸 Personal experiments with react-three-fiber</title>
      <meta name="description" content="Personal experiments with react-three-fiber"></meta>
      <meta name="og:title" property="og:title" content="Personal experiments with react-three-fiber"></meta>
      <meta name="robots" content="index, follow"></meta>
    </Head>
    <HomeContainer />
  </>
);

export default IndexPage;
