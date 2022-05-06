import {Routes,Route} from 'react-router-dom'
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Navbar } from './components/ux/Navbar';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
