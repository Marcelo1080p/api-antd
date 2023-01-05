import { ConfigProvider } from 'antd';
import pt_BR from  "antd/locale/pt_BR"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Pages/Details';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={pt_BR}>
    <Router>
      <Routes>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </Router>
    <App /> 
  </ConfigProvider>

);


