'use client'
// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Link from 'next/link';
import Product from './components/Product';
import Category from './components/Category';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      {/* <SideBar/> */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/add-product" Component={Product} />
        <Route path="/add-category" Component={Category} />
        {/* Define more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
