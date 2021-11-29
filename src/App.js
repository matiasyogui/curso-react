import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { CartView } from "./components/CartView/CartView";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorComponent } from "./components/ErrorComponent/ErrorComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/detail/:itemid" element={<ItemDetailContainer />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
