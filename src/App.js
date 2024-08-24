import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/header.js';
import routes from './config/routes.js';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
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
