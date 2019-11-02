import * as React from 'react';
import { NextPage } from 'next';

import dynamic from 'next/dynamic'

const HomeContainer = dynamic(
  () => import('../containers/home/HomeContainer'),
  { ssr: false }
);

const IndexPage: NextPage = () => (
  <HomeContainer />
)

export default IndexPage;
