import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const{bookId ,image, bookName,author, rating, category,tags }=book;
    return (
        <Link to={`/books/${bookId}`}>
        <div className='border  p-5 space-y-5 rounded-xl  shadow-lg'>
            <img className='max-w-[30%] mx-auto ' src={image} />
            <div className='space-x-4'>
                {
                    tags.map((tag ,idx) => <button key={idx} className='btn btn-xs bg-lime-500 rounded-full'>{tag} </button>)
                }
            </div>
            <h3 className='text-2xl font-bold'>{bookName}</h3>
            <h3 className='text-gray-700 text-lg'>By: {author}</h3>
            <div className='border-t-2 border-dashed'></div>
            <div className='flex space-x-16'>
                <p className=''>{category}</p>
                <p>{rating}⭐</p>
            </div>
        </div>
        </Link>
    );
};

export default Book;