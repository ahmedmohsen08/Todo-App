import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}) {

    const [isAuthinticated, setAuthintication] = useState(false)
    const [username, setUsername] = useState('')

    function login(username, password) {
        if(username==='ahmed' && password==='123') {
            setAuthintication(true)
            setUsername(username)
            return true
        }
        else {
            setAuthintication(false)
            return false
        }
    }

    function logout() {
        setAuthintication(false)
    }

    return (
        <AuthContext.Provider value = {{isAuthinticated,setAuthintication,login,logout,username}}>
            {children}
        </AuthContext.Provider>
    )
}