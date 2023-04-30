// import { Provider } from 'react-redux';
// import { createWrapper } from 'next-redux-wrapper';
// import { store } from '@/redux-store/store';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    // {' '}
    <Component {...pageProps} />
    // </Provider>
  );
}

// const wrapper = createWrapper(() => store);

export default App;
