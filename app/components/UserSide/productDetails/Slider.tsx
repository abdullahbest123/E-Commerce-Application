import React from "react";

import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import MoreProducts from './MoreProducts';
import "./css/Slider.css"

const Slider: React.FC = () => {
  return (
    <>
      {/* <section className="nav-bar">
        <article className="logo">Animals</article>
        <ul className="nav-options">
          <li>Home</li>
          <li>Shop</li>
          <li>My Account</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </section> */}

      <section className="container">
        <div className="product">
          <div className="product-image-about">
            <div className="product-image">
              <img
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="pro-image"
              />
            </div>
            <div className="about-product">
              <p>
                <AiFillStar />
                4.5(24 Reviews)
              </p>
              <h2>705-ASUS Shirt</h2>
              <p className="price">25.55$</p>
              <p>Fabric</p>
              <ul className="fabric-type">
                <li>Combed Cotton</li>
                <li>Sumpia Cotton</li>
              </ul>

              <div className="buttons">
                <button className="Add-To-Cart">Add To Cart</button>
                <button className="Add-To-Cart">1</button>
                <button className="Add-To-Cart">Add to Wishlist</button>
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="section-size-color">
            <div className="size-colors">
              <p>Size</p>
              <ul className="sizes-color-type size-button">
                <button>M</button>
                <button>S</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
              </ul>
            </div>

            {/* colors */}
            <div className="size-colors">
              <p>Colors</p>
              <ul className="sizes-color-type colors-button">
                <button style={{ backgroundColor: "maroon" }} />
                <button style={{ backgroundColor: "green" }} />
                <button style={{ backgroundColor: "yellow" }} />
                <button style={{ backgroundColor: "orange" }} />
                <button style={{ backgroundColor: "blue" }} />
                <button style={{ backgroundColor: "brown" }} />
              </ul>
            </div>
          </div>
          {/* Description */}

          <div className="size-colors">
            <h2>Description</h2>
            <article>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              similique voluptatibus odio, dolores voluptatem, quae rerum fugit
              rem praesentium quia explicabo necessitatibus quas repudiandae
              animi minus mollitia. Iure culpa quisquam at exercitationem fuga
              accusamus eligendi, voluptatibus earum delectus est ipsa beatae
              saepe temporibus repellat distinctio recusandae, praesentium amet
              nemo suscipit animi enim reiciendis possimus adipisci et? Dicta
              aut autem veritatis.
            </article>
          </div>
        </div>
        <aside className="similar-products">
          <h2>More Products</h2>
          <MoreProducts />
          <MoreProducts />
          <MoreProducts />
          <MoreProducts />
          <MoreProducts />
        </aside>
      </section>
    </>
  );
};

export default Slider;
