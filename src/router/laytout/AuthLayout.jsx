import React, { useContext, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const AuthLayout = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <div>
            {
                isLoggedIn ?
                    <>
                        AuthLayout
                        <Outlet />
                    </> :
                    <Navigate to="/" />
            }

        </div>
    )
}

export default AuthLayout