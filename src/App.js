import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav.js";
import routes from './config/routes.js';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Nav />
        <div className="flex-1">
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
