import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../../component/Header'
import { AuthContext } from '../../context/AuthContext'

const RootLayout = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <div>
            <Header />
            <Outlet />
            {
                isLoggedIn ?
                    <Navigate to="/auth" /> : ""
            }
        </div>
    )
}

export default RootLayout