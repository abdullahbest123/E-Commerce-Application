import HomeItem from '../components/HomeItem';
import React from 'react';
const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <HomeItem
        heading="Products"
        buttons={[
          { name: 'Add Product', link: '/' },
          { name: 'Search Product', link: '/' },
          { name: 'Delete Product', link: '/' },
          { name: 'Update Product', link: '/' },
        ]}
      />
      <HomeItem
        heading="Category"
        buttons={[
          { name: 'Add Category', link: '/' },
          { name: 'Search Category', link: '/' },
          { name: 'Delete Category', link: '/' },
          { name: 'Update Category', link: '/' },
        ]}
      />
      <HomeItem
        heading="Reviews"
        buttons={[
          { name: 'Add Reviews', link: '/' },
          { name: 'Search Reviews', link: '/' },
          { name: 'Delete Reviews', link: '/' },
          { name: 'Update Reviews', link: '/' },
        ]}
      />
    </div>
  );
};

export default Home;
