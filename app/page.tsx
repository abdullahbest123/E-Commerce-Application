'use client'
import { BrowserRouter } from 'react-router-dom';
// import Product from "./components/Product"
// import Category from "./components/Category"
// import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import PageHome from "./Pages/Home";
function Home (): JSX.Element
{
  return (
    // <Product />
    <BrowserRouter>
      <Navbar />

      <PageHome />
      {/* <SideBar />
      <Category /> */}
    </BrowserRouter>
  )
}

export default Home;
