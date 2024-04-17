import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import Login from './views/Login';

function App() {
  return (
    <div className="w-full h-screen flex flex-cols text-center">
      <Routes>
         <Route path='/' element={<Dashboard/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/login' element={<Login/>} />
       </Routes>
    </div>
  );
}

export default App;
