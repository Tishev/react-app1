import Home from "./pages/home/Home";
import "../src/scss/style.scss";
import { Route, Routes } from "react-router-dom";
import MyAccount from "../src/pages/MyAccount/MyAccount";
import BusinessAccount from "../src/pages/BusinessAccount/BusinessAccount";
import AnotherAccount from "../src/pages/AnotherAccount/AnotherAccount";
import AddPost from "../src/pages/AddPost/AddPost";
import Product from "../src/pages/Product/Product";
import { useEffect, useState } from "react";
import Header from "./layout/header/Header";
function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/businessaccount" element={<BusinessAccount />} />
        <Route path="/anotheraccount" element={<AnotherAccount />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
// 2 part 10 10
