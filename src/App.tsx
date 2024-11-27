import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Registration from './pages/Registration'
import ForgetPassword from './pages/ForgetPassword'
import SetPassword from './pages/SetPassword'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgetPassword />} />
                <Route path="/set-password" element={<SetPassword />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/Profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default App