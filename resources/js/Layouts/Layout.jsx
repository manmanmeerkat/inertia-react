import { useEffect } from 'react';
import NavBar from '../Components/NavBar';

const Layout = ({ children }) => {
  useEffect(() => {
    console.log('Mount Layout');
    return () => {
      console.log('UnMount Layout');
    };
  },[]);
  return (
    <>
    <header>
        <h1 style={{ textAlign: 'center' }}>Logo</h1>
      <NavBar />
    </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;