import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const BuilderPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resume Builder by CSI VIT-AP</title>
        <meta
          name="description"
          content="Resume Builder, proudly presented by CSI Chapter VIT-AP"
        />
        <link rel="icon" type="image/png" href="/icons/logo.png" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default BuilderPage;
