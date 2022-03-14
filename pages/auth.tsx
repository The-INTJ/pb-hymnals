// Import useAuth from context
import { useAuth } from "../context/AuthContext";

// Destructure login and logout functions.
const { login, logout } = useAuth();
export default function loginInOut() {
    return (
        <div>
            <button onClick={login}> Login </button>
            <button onClick={logout}> Logout </button>
        </div>
    );
}