import Home from "./pages/home/Home";
import "./scss/header/header.scss";
import { Route, Routes } from "react-router-dom";
import MyAccount from "../src/pages/MyAccount/MyAccount";
import BusinessAccount from "../src/pages/BusinessAccount/BusinessAccount";
import AnotherAccount from "../src/pages/AnotherAccount/AnotherAccount";
import AddPost from "../src/pages/AddPost/AddPost";
import Product from "../src/pages/Product/Product";
function App() {
  return (
    <div>
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
// 1 15 15
