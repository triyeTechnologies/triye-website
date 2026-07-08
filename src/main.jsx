import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Code-split the admin dashboard out of the public landing page bundle
const AdminPage = lazy(() => import('./components/AdminPage.jsx'))

const adminFallback = (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400" />
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={adminFallback}>
              <AdminPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
