import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Netflix from './pages/Netflix';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Netflix/>} />
      
      </Routes>
    </>
  );
}

export default App;
