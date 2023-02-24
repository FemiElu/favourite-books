import React,{ useState, useEffect } from 'react'; 
import axios from 'axios';
import Books from './Books';
import './books.css';


const BooksComponent = () => {

      const [books, setBooks] = useState("");
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(true);
      
    const url = "http://3.236.191.157:4000/books/favourite"
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
          try {
            const token = localStorage.getItem('access_token');
            console.log(token)
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setBooks(response?.data.data.book);
            console.log(response?.data.data.book);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      const slicedBooks = books.slice(0, 20)
      if (loading) {
        return <div>Loading...</div>;
      }
      return(
        <section className='section'>
         <h2 className='section-title'>Books You Might Like</h2>
         <div className='section-center'>
        {
            slicedBooks.map((item)=>{
                return <Books key={item.id} {...item} />
            })
        }
         </div>
        </section>
      )
     }


export default BooksComponent