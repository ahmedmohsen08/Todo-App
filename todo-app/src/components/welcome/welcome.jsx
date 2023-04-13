import {useParams,Link} from 'react-router-dom'

export default function Welcome() {
    const {username} = useParams();
    
    return(
        <div>
            <span>welcome {username}</span>
            <span> goto <Link to='/todos' >todos</Link></span>
        </div>
    )
}