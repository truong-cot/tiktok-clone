import '../styles/globals.scss';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  const LayoutPage = Component.Layout;

  return (
    <>
      {LayoutPage ? (
        <Component.Layout {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
