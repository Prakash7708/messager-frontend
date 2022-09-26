
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/chat" element={<Chat/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
            
  )
}

export default App;
