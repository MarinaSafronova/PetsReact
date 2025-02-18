import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import EsaLaws from "./pages/EsaLaws";
import Post from "./pages/Post";
import CheckoutFinish from "./pages/checkout/Checkout-finish";
import CheckoutStart from "./pages/checkout/Checkout-start";
import Checkout2 from "./pages/checkout/Checkout2";
import Checkout3 from "./pages/checkout/Checkout3";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="laws" element={<EsaLaws />} />
                <Route path="faq" element={<EsaLaws />} />
                <Route patg="contact" element={<EsaLaws />} />
                <Route path="laws/post/:id" element={<Post />} />
                <Route path="/checkout/start" element={<CheckoutStart />} />
                <Route path="/checkout2" element={<Checkout2 />} />
                <Route path="/checkout3" element={<Checkout3/>} />
                <Route path="payment" element={<CheckoutFinish />} />
            </Routes>
        </>
    );
}

export default App;
