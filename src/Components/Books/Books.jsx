import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const[books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('./BooksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className=''>
           <h2 className="text-3xl font-bold text-center mb-10">Books</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-7 my-16'>
           {
            books.map( book=><Book key={book.bookId} book={book}></Book>)
           }
           </div>

        </div>
    );
};

export default Books;