import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxStore from './ReduxStore/ReduxStore';
import { PayPalScriptProvider} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AcsN_3p_B8j8EiVwAUfvLV3cbJcNXgMPJEd45fxbPpyIB6dbKHdNKTLZDXUKucOHyrPuV6tA0SUhPnNT",
  currency: "USD",
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ReduxStore}>
        <PayPalScriptProvider options={initialOptions}>
        <App />
        </PayPalScriptProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
