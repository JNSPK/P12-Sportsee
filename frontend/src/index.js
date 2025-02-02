import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            // Si le chemin ne correspond à aucune route, redirection vers une URL avec isMocked=true
            window.location.pathname !== '/user/:userId' ? (
              <div>
                <Navigate to='/?isMock=true' />
                <App />
              </div>
            ) : (
              <App />
            )
          }
        />
        <Route path='/user/:userId' element={<App />} />
      </Routes>
    </Router>
  </QueryClientProvider>
);
