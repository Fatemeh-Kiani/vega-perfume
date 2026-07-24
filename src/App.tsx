
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./layouts/mainLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import About from "./pages/About"
import Journal from "./pages/Journal"
import Contact from "./pages/Contact"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/journal" element={<Journal/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
</Route>
    </Routes>
    </BrowserRouter>

  )
}
export default App;