import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from "./Pages/form";
import Bienvenida from "./Pages/Bievenida";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Bienvenida />}></Route>
            <Route path='/form' element={<Form />}></Route>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
