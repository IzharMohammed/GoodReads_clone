
import BookCard from "Components/BookCard";
import Layout from "../Layouts/Layout";
import React from "react";

function Dashboard() {
  return (
    <>
    <Layout >
      
      <div  className="border border-green-500 min-h-[90vh] ">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />

      </div>
      </Layout>
    </>
  );
}

export default Dashboard;
