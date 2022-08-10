import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider} from './context/AuthContext'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
    <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/account' element={
          <ProtectedRoute>
            <Account/>
          </ProtectedRoute>
        }/>
      </Routes>
    </AuthContextProvider>
      
  </>
  );
}

export default App;
