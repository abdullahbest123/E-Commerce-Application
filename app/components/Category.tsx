import React from 'react';

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
                <button type="submit" className="btn">
                    Add
                </button>
            </form>
        </div>
    );
};

export default Category;
