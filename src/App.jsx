import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, useNavigate } from 'react-router-dom'
import { router } from './router/router'
import { AuthProvider } from './context/AuthContext'
import { useAuthHook } from './hooks/AuthHook'


function App() {
  const { isLoggedIn, login, logout } = useAuthHook()
  return (
    <>
      <AuthProvider value={{ isLoggedIn, login, logout }}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
