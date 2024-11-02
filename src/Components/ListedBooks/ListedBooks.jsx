import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {

    const allBooks = useLoaderData();

    const [readList, setReadList] = useState([]);

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(bookId => parseInt(bookId));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
    

        setReadList(readBookList);
    },[])


    
    return (
        <div>
            <h3 className="text-3xl">Listed Books</h3>      
  <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>My Read List{readList.length}</h2>
    {
        readList.map( book=><Book key={book.bookId} book={book}></Book>)
    }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;