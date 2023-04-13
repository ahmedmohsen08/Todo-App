import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../security/AuthContext';

export default function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const navigate = useNavigate()

    const authContext = useAuth()
    
    function setUsernameFunc(event) {
        setUsername(event.target.value)
    }
    
    function setPasswordFunc(event) {
        setPassword(event.target.value)
    }
    
    function handleLogin() {
        const isAuthinticated = authContext.login(username,password)
        if(isAuthinticated) {
            navigate(`/welcome/${username}`)
        }
    }
    
    return(
            <div className="login">
                <div>
                    <label>username: </label>
                    <input type="textbox" name="username" value={username} onChange={setUsernameFunc} />
                </div>
                <div>
                    <label>password: </label>
                    <input type="password" name="password" value={password} onChange={setPasswordFunc} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleLogin}>login</button>
                </div>
            </div>
        )
}