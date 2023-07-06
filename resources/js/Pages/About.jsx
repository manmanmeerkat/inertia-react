import Layout from '../Layouts/Layout';
import { Head,usePage } from '@inertiajs/react';

const About = () => {
  const { appName } = usePage().props;
  return (
  <>
    <Head>
      <title>Aboutページ</title>
      <meta 
        head-key="description"
        name="description"
        content="これはAboutページです" 
      />
      <meta head-key="keywords" name="keywords" content="About" />
    </Head>
    <h1>About | {appName}</h1>
  </>
  );
};

About.layout = (page) => <Layout children={page} />;

export default About;