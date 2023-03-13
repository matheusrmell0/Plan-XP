import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './GlobalState/configureStore';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Provider com Redux para prover estados globais para o aplicativo
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
);
