import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from "./Pages/form";
import Bienvenida from "./Pages/Bievenida";
import Despedida from "./Pages/despedida";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Bienvenida />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/despedida' element={<Despedida />}></Route>
        </Routes>
    </BrowserRouter>
  );
}


export default App;
