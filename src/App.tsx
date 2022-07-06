import React, { useState } from "react";
import LoginPage from "./pages/login";
import MainPage from './pages/main';
import NavtopBarComponent from "./component/navtopbar";
import { Routes, Route } from 'react-router-dom'
// import ChildLevelOneComponent from "./component/childLevelOne";

const App: React.FC = () => {
  const [itemInCart, setItemInCart] = useState(10);
  return (
    <div>
      {/* <h1>Parent Component</h1>
      <ChildLevelOneComponent itemInCart={itemInCart} /> */}

      <NavtopBarComponent />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
