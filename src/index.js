//Linhtn23

import React from 'react';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import {StatusBar} from 'react-native';
// import allReducers from './redux/reducers';
// import rootSaga from './redux/middleware/saga/rootSaga';
// const sagaMiddleware = createSagaMiddleware();
// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

import AppContainer from './containers/App';

export default class Root extends React.Component {
  render() {
    return (
      // <StatusBar barStyle="dark-content" />
      <AppContainer />
      // <Provider store={store}>

      // </Provider>
    );
  }
}

// sagaMiddleware.run(rootSaga);
