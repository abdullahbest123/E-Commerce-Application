import React from 'react';

interface Review {
  id: number;
  name: string;
  email: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

function Rating({ rating }: { rating: number }): JSX.Element {
  const MAX_STARS = 5;
  const filledStars = Math.round(rating * MAX_STARS) / MAX_STARS;

  return (
    <div className='subdiv'>
      {Array.from({ length: MAX_STARS }, (_, index) => (
        <span className='subdiv ratex' style={{ color: index < filledStars ? 'gold' : 'lightgray' }}>
          {index < filledStars ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

function ReviewsList(): JSX.Element {
  // data of reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: 'ali',
      email: 'ali@gmail.com',
      date: 'February 16, 2021',
      rating: 3,
      text: 'very great product very great productvery great productvery great productvery great productvery great product',
      image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
     {
    id:2,
    name: 'usama',
    email: 'usama@gmail.com',
    date:'Feburary 15, 2021',
    rating: 4, text: 'not satisfieisfied sfiednot satisfied not satsfgsdfgsfdgsfg sfgsdfg srgser isfiednot satisfiednot satisfifgsdfgsfdgsfg sfgsdfg srgser isfiednot satisfiednot satisfiednot satisfiednot satisfiednot satisfiednot satisfiednot satisfiednot satisfiednot satisfied',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    id:3,
    name: 'abdullah',
    email: 'abdullah@gmail.com',
    date:'Feburary 12, 2021',
    rating: 3, text: 'very great produceat productvery great productvery great productvery great productvery great productvery great productvery great product',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    id:4,
    name: 'waqas',
    email: 'abdullah@gmail.com',
    date:'Feburary 12, 2021',
    rating: 1, text: 'very great produceat productvery great productvery great productvery great productvery great productvery great productvery great product',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  }
    // Add other review objects here
  ];

  return (
    <div className='main'>
      <h2 className='h2'>{reviews.length} Reviews for the product</h2>
      {reviews.map((review) => {
        const { id, name, text, rating, image, date } = review;
        return (
          <article key={id} className='review'>
            <div className='abc'>
              <img src={image} alt={`Review by ${name}`} />
              <div className='data'>
                <Rating rating={rating} />
                <span className='date'>{date}</span>
                <h4 className='subdiv'>{name}</h4>
                <p className='subdiv'>{text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ReviewsList;
