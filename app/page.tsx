'use client'
// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Admin/Home';
import Link from 'next/link';
import Product from './components/AdminSide/Products/Product';
import Category from './components/AdminSide/Category/Category';
import Navbar from './components/AdminSide/Nav-Side-Bar/Navbar';
import SideBar from './components/AdminSide/Nav-Side-Bar/SideBar';
import { ProductDetailSection } from './components/UserSide/productDetails/ProductDetailSection';
import { ReviewsSection } from './components/UserSide/reviewsSection/ReviewsSection';

const AppRouter = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <ProductDetailSection></ProductDetailSection>
      {/* <ReviewsSection></ReviewsSection> */}
      
      {/* <SideBar/> */}
      {/* <Routes>
        <Route path="/" Component={Home} />
        <Route path="/add-product" Component={Product} />
        <Route path="/add-category" Component={Category} />
      </Routes> */}
    </Router>
  );
};

export default AppRouter;
