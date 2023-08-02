'use client'
import React from 'react';
import {Link} from 'react-router-dom';
import "../admin.css"

interface ProductForm {
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  option: boolean;
  category: string;
}

const Product: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="labelwithinput">
          <label className="lable" htmlFor="name">
            Enter Name:
          </label>
          <input className="inputt" placeholder="Enter Name" id="name" />
        </div>
        <div className="labelwithinput">
          <label className="lable" htmlFor="desc">
            Description:
          </label>
          <input
            className="inputt"
            placeholder="Enter Description"
            id="desc"
          />
        </div>
        <div className="labelwithinput">
          <label className="lable" htmlFor="qty">
            Enter Quantity:
          </label>
          <input
            className="inputt"
            placeholder="Enter Quantity"
            type="number"
            id="qty"
          />
        </div>
        <div className="labelwithinput">
          <label className="lable" htmlFor="price">
            Enter Price:
          </label>
          <input
            className="inputt"
            placeholder="price"
            type="number"
            id="price"
          />
        </div>
        <div className="labelwithinput">
          <label className="lable" htmlFor="image">
            Enter Image:
          </label>
          <input className="inputt" placeholder="Enter Image" id="image" />
        </div>
        <div className="labelwithinput">
          <label className="label" htmlFor="option">
            Select Option:
          </label>
          <div style={{ display: 'inline-flex', marginLeft: '70px' }}>
            <label style={{ marginRight: '20px' }}>
              <input
                className="input"
                style={{ marginRight: '5px' }}
                type="radio"
                name="option"
                value="true"
              />
              True
            </label>
            <label>
              <input
                className="input"
                style={{ marginRight: '5px' }}
                type="radio"
                name="option"
                value="false"
              />
              False
            </label>
          </div>
        </div>

        <div className="labelwithinput">
          <label className="label" htmlFor="category">
            Select Category:
          </label>
          <select className="catg" id="category">
            <option value="">Select a category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
</div>
        
        <br />

        <button type="submit" className="btn formbtn">
          Add
        </button>
      </form>

      
        <Link to= "/"><button  className="btn">Back</button></Link>
    </div>
    
  );
};

export default Product;
