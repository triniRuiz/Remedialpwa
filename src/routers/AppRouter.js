import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ProductScreen } from '../components/products/ProductScreen';
import { Product } from '../components/product/Product';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { HomeScreen } from '../components/home/HomeScreen';
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                    <Route path="/home"element={<HomeScreen />} />
                    <Route path="product" element={<ProductScreen />} />
                    <Route path="Product/:ProductId" element={<Product />} />
                    <Route path="/" element={<ProductScreen />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
    )
}
