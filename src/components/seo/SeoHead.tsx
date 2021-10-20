import React from 'react';
import { DefaultSeo } from 'next-seo';
import NextHead from 'next/head';
import config from '../../config/seo.json';

const SeoHead: React.FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </NextHead>
    </>
  );
};

export default SeoHead;
