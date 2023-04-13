import Login from '../login/login'
import Welcome from '../welcome/welcome'
import TodoComponent from '../todos/todos'
import ErrorComponent from '../error/error'
import HeaderComponent from '../header/header'
import {Routes,Route,BrowserRouter, Navigate} from 'react-router-dom'
import LogoutComponent from '../logout/LogoutComponent'
import AuthProvider, { useAuth } from '../security/AuthContext'

function AuthinticatedRoute({children}) {
    const authContext = useAuth()
    if(authContext.isAuthinticated) {
        return children
    }

    return <Navigate to="/" />
}

export default function TodoApp() {
    return(
            <>
                <AuthProvider>
                    <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path="/" element={<Login/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/welcome/:username" element={<AuthinticatedRoute><Welcome/></AuthinticatedRoute>} />
                            <Route path="/todos" element={<AuthinticatedRoute><TodoComponent/></AuthinticatedRoute>} />
                            <Route path="/logout" element={<AuthinticatedRoute><LogoutComponent/></AuthinticatedRoute>} />
                            <Route path="*" element={<ErrorComponent/>} />
                        </Routes>
                    </BrowserRouter>
                </AuthProvider>
            </>
       )
}