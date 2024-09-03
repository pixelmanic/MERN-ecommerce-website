import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import {LoadingOutlined} from "@ant-design/icons";
import Error from './Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
const Sale = React.lazy(() => import('./Components/Sale'))
const NewArrivals = React.lazy(() => import('./Components/NewArrivals'))
const Shop = React.lazy(() => import('./Components/Shop'))
const LookBook = React.lazy(() => import('./Components/LookBook'))
const About = React.lazy(() => import('./Components/About'))
const Blog = React.lazy(() => import('./Components/Blog'))
const Wishlist = React.lazy(() => import('./Components/Wishlist'))
const SingleProduct = React.lazy(() => import('./Components/SingleProduct'))
const SearchPage = React.lazy(() => import('./Components/SearchPage'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='Loading-Handler'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sale' element={<Suspense fallback={<LoadingOutlined />}><Sale /></Suspense>} />
            <Route path='/new' element={<Suspense fallback={<LoadingOutlined />}><NewArrivals /></Suspense>} />
            <Route path='/all-products' element={<Suspense fallback={<LoadingOutlined />}><Shop /></Suspense>} />
            <Route path='/lookbook' element={<Suspense fallback={<LoadingOutlined />}><LookBook /></Suspense>} />
            <Route path='/about' element={<Suspense fallback={<LoadingOutlined />}><About /></Suspense>} />
            <Route path='/blog' element={<Suspense fallback={<LoadingOutlined />}><Blog /></Suspense>} />
            <Route path='/wishlist' element={<Suspense fallback={<LoadingOutlined />}><Wishlist /></Suspense>} />
            <Route path='/products/:id' element={<Suspense fallback={<LoadingOutlined />}><SingleProduct /></Suspense>} />
            <Route path='/searched-products' element={<Suspense fallback={<LoadingOutlined />}><SearchPage /></Suspense>} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
