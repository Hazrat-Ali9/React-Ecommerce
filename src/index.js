import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='max-w-screen-2xl mx-auto'>
 <BrowserRouter>
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>
  </BrowserRouter>
  </div>
 
  
);


reportWebVitals();
