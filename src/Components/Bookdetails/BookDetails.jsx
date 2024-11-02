import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/addToDb";



const BookDetails = () => {
    const {bookId}=useParams();

    const data = useLoaderData();

     
    const book = data.find(book => book.bookId === parseInt(bookId))


    console.log(data , bookId);


    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead =(bookId)=> {
        addToStoredReadList(bookId)
    }
    return (
        <div className="my-7">
            <h1>Book Details {bookId}</h1>
            <img className="w-1/6 py-10 " src={image}/>
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent"> mark As Read</button>  
            <button className="btn btn-accent"> Add To Wishlist</button>  
        </div>
    );
};

export default BookDetails;