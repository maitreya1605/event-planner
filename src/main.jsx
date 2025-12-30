import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import Services from './components/pages/Services.jsx'

import Contact from './components/pages/Contact.jsx'
import Auth from './components/pages/Auth.jsx'
import ClientDashboard from './components/pages/ClientDashboard.jsx'
import Profile from './components/pages/Profile.jsx'

import AddEvent from './components/pages/AddEvent.jsx'
import ManageBudget from './components/pages/ManageBudget.jsx'
import VendorManagement from './components/pages/VendorManagement.jsx'
import LoginRequired from './components/pages/LoginRequired.jsx'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },

      { path: 'contact', element: <Contact /> },
      { path: 'auth', element: <Auth /> },
      { path: 'client-dashboard', element: <ClientDashboard /> },
      { path: 'profile', element: <Profile /> },
      { path: 'login-required', element: <LoginRequired /> },
      { path: 'add-event', element: <ProtectedRoute><AddEvent /></ProtectedRoute> },
      { path: 'manage-budget', element: <ProtectedRoute><ManageBudget /></ProtectedRoute> },
      { path: 'vendor-management', element: <ProtectedRoute><VendorManagement /></ProtectedRoute> },
    ],
  },
])

import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
