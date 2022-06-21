import '../styles/globals.scss';
import DefaultLayout from '../components/layout/DefaultLayout';

function MyApp({ Component, pageProps }) {
  const LayoutPage = Component.Layout;

  return (
    <>
      {LayoutPage ? (
        <Component.Layout {...pageProps} />
      ) : (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </>
  );
}

export default MyApp;
