import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { AuthContextProvider} from './context/AuthContext'

function App() {
  return (
    <>
    <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </AuthContextProvider>
      
  </>
  );
}

export default App;
