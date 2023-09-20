import { Herobox, Stats, Goals, About, Features } from '@/components';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Tricycle Bin</title>
      </Head>
      <Herobox />
      <About />
      <Features />
      <Goals />
    </>
  );
};

export default index;
