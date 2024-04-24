import { createContext } from "react";

let auth = {
    isLoggedIn: false,
    login: (username, password) => { },
    logout: () => { }
}

export const AuthContext = createContext(auth)

export const AuthProvider = AuthContext.Provider