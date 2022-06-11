import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/HomePage';

const routes = [
   {path: 'home', component : <HomePage/> , index: true}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {
              routes.map((route, index) => (
                <Route 
                key={index}
                path={route.path}
                element={route.component}
                index={route.index}
                />
              ))
            }
          </Route>
        </Routes>
    </BrowserRouter>
</React.StrictMode>
);

