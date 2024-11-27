import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the App</h1>
            <ul>
                <li><Link to="login">Login</Link></li>
                <li><Link to="/register">Authorization</Link></li>
                <li><Link to="/forgot-password">Forgot Password</Link></li>
                <li><Link to="/set-password">Set Password</Link></li>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <li><Link to="/Profile">Profile</Link></li>
            </ul>
        </div>
    );
}

export default HomePage