import { ConfigProvider } from 'antd';
import pt_BR from  "antd/locale/pt_BR"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={pt_BR}>
    <App /> 
  </ConfigProvider>

);


