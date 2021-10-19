import React from 'react';
import '../styles/globals.scss'
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './../redux/store';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {


  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


const makeStore = () => store;
const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
// export default withRedux(makeStore)(MyApp);