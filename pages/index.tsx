import { Herobox, Stats, Goals, About, Features , Valide , Project} from '@/components';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Tricycle Bin</title>
      </Head>
      <Herobox />
      <About />
      <Valide />
      <Features />
      <Goals />
      <Project />
    </>
  );
};

export default index;
