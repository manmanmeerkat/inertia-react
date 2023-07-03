import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';

const Welcome = (props) => {
  useEffect(() => {
    console.log('Welcome Page mounted');
  }, []);

  return (
    <>
      <NavBar />
      <h1>Welcome</h1>
    </>
  );
};
export default Welcome;