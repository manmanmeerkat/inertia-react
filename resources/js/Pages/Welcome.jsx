import NavBar from '@/Components/NavBar';
import Layout from '@/Layouts/Layout';
import { useEffect } from 'react';

const Welcome = () => {
  return <h1>Welcome</h1>
};

Welcome.layout = (page) => <Layout children={page} />
export default Welcome;