import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App/App';

import './styles/index.scss';
import { Faq } from './components/FAQ/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/FAQ',
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
