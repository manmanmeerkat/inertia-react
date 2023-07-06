import NavBar from '../Components/NavBar';
import { Head } from '@inertiajs/react';

const Layout = ({ children }) => {
  return (
    <>
    <Head>
      <title>My App</title>
      <meta
        head-key="description"
        name="description"
        content="My Appアプリケーション"
      />
      <meta head-key="keywords" name="keywords" content="My App" />
    </Head>
    <header>
        <h1 style={{ textAlign: 'center' }}>{children.props.appName}</h1>
      <NavBar />
    </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;