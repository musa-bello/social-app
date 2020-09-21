import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css'
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Component/reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from './config/firebaseConfig'
import { createFirestoreInstance } from 'redux-firestore'

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))

const rrfProps = {
  firebase,
  config:{},
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


