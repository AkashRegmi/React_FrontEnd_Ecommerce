import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

import Products from "./pages/Products";
import Table from "./components/Tables";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Table/>} />
          <Route path="*" element={<h1>Route Not Found </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
