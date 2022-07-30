import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
//import Login from './Components/Login';
import Register from './Components/Register';
import Retrieve from './Components/Retrieve';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="retrieve" element={<Retrieve></Retrieve>}></Route>
        <Route path="dash" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
