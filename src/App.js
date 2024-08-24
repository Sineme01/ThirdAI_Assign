import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/formPage.js";
import Read from "./components/readPage.js";
import Header from './components/header.js';
import Home from "./components/home.js";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/read' element={<Read />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
