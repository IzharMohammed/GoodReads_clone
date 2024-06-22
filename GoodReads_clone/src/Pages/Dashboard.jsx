import BookCard from "Components/BookCard";
import Layout from "../Layouts/Layout";
import React, { useState,useEffect } from "react";
import { getAllBooks } from "Redux/Slice/BookSlice";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch()
  const state = useSelector(state=>state.books);
 // const[AllBooks , setAllBooks]= useState(null);
  console.log('books data',state.bookList);
  const fetchBooks = async () =>{
      const response = await dispatch(getAllBooks());
     // setAllBooks(response?.payload?.data?.data);
      console.log(response);
  }
  useEffect(()=>{
      fetchBooks();
  },[])

  return (
    <>
      <Layout>
        <div className="border border-green-500 min-h-[90vh] ">
          {
            state.bookList && state.bookList.map(book=>{
              return(
                <BookCard  data={book} />
              )
            })
          }
          <BookCard />
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
