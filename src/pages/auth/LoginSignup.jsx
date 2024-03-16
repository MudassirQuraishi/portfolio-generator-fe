import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
    return (
        <Routes>
            <Route path="/register" element={<Signup />} />
            <Route path="/register/login" element={<Login />} />
        </Routes>
    );
}

export default LoginSignup;
