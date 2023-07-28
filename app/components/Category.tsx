import React from 'react';
import {Link} from 'react-router-dom';

const Category: React.FC = () =>
{
    return (
        <div className="container">
            <form className="form">
                <div className="labelwithinput">
                    <label className="lable" htmlFor="name">
                        Category Name:
                    </label>
                    <input
                        className="inputt"
                        placeholder="Enter Category Name"
                        id="name"
                    />
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

export default Category;
