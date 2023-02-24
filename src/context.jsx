// import React, { useState, useContext, useEffect } from 'react'
// import axios from 'axios'


// const url = 'http://3.236.191.157:4000';
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzcxNDg3ODUsImV4cCI6MTY3NzE1MDU4NX0.L1EV-zjwFWay9tRP6243Dc5uWBdmkoxeTThjAa6G210';
// const headers = {
//   'Authorization': `Bearer ${token}`
// };



// const AppContext = React.createContext()

// const AppProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [books, setBooks] = useState([]);

//   const fetchBooks = async() => {
//     setLoading(true);
//     try {
//       const response = await axios.get(url, { headers});
//       const books =  response.data
//       console.log(books);
//     setBooks(books); 
//     setLoading(false)
//     } catch (error) {
//       console.log(error)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchBooks()
//   }, [])
//   return (
//     <AppContext.Provider
//       value={{ loading, books }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
// }

// export const useGlobalContext = () => {
//   return useContext(AppContext)
  
// }

// export {AppContext, AppProvider }