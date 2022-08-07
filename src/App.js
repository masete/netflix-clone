import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider} from './context/AuthContext'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Account from './pages/Account';

function App() {
  return (
    <>
    <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/Account' element={<Account/>}/>
      </Routes>
    </AuthContextProvider>
      
  </>
  );
}

export default App;
