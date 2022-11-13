import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRouted } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
function App() {
    return (
        <div className='bg-slate-300 h-screen text-black flex'>
            <AuthProvider>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <ProtectedRouted>
                                <Home />
                            </ProtectedRouted>
                        }
                    />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}
export default App;
