import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { NominationListContextProvider } from "./components/NominationListContext";
import { BannerContextProvider } from "./components/BannerContext";

ReactDOM.render(
  <React.StrictMode>
    <NominationListContextProvider>
      <BannerContextProvider>
        <App />
      </BannerContextProvider>
    </NominationListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
