import { useState } from "react";

export function useAuthHook() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const login = (username, password) => {
        if (username === "testuser" && password === "test@123") {
            setisLoggedIn(true)
            console.log("Login Sucess!")
        }
        else {
            console.log("Login Failed!");
        }
    }
    const logout = () => {
        console.log("Logged Out!");
        setisLoggedIn(false)
    }
    return { isLoggedIn, login, logout }
}