import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layouts/Layout";
import React, { useEffect, useState } from "react";
import { getAllShelfs } from "Redux/Slice/ShelfSlice";
import image from "../Assets/onePiece.jpeg"
function Shelf() {
const shelfState = useSelector(state => state.shelf);
const[books,setBooks]=useState([]);

const dispatch = useDispatch();
const loadShelves =async  () =>{
  const response = await dispatch(getAllShelfs())
/*   console.log(response?.payload?.data?.data);
  console.log(response?.payload?.data?.data[0].books);
  console.log(response?.payload?.data?.data[0].name); */

}

useEffect(()=>{
  loadShelves();
},[])

const handleShelfs =(shelf)=>{
  console.log(shelf);
  shelfState.shelfList.forEach(shelf=>{
    if(shelf._id==shelf.id){
      setBooks(shelf.books)
    }
  })
  setBooks(shelf.books);
}

console.log('books',books);

console.log(shelfState.shelfList);
  return (
    <Layout>
      <div>
        <div className="border border-pink-600 h-[100vh] ">
            <div className="m-8 flex justify-around ">
              {
                  shelfState.shelfList && shelfState.shelfList.map(shelf=>(
                    <div className="btn btn-accent" onClick={()=> handleShelfs(shelf)}>{shelf.name}</div>
                  ))
              }
            </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl text-white">Name</th>
                  <th className="text-xl text-white">Description</th>
                  {/*   <th>Favorite Color</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  books.length>0 && books.map(book=>
                    (
                      <tr>
                      <th></th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                              <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-white">{book.title}</div>
                            <div className=" text-white text-sm  ">Pages :- {book.pages}</div>
                           <div> {book.publishDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-white">
                       {book.description}
                        <br />
                        <span className="badge badge-ghost badge-sm text-white">
                          Desktop Support Technician
                        </span>
                      </td>
    
                      <th>
                        <button className="btn btn-primary">details</button>
                      </th>
                    </tr> 
                    )
                  )
                }
                
         
                {/* row 2 */}
     {/*            <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr> */}
                {/* row 3 */}
 {/*                <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Rowe-Schoen
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Office Assistant I
                    </span>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr> */}
                {/* row 4 */}
    {/*             <tr>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Wyman-Ledner
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Community Outreach Specialist
                    </span>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shelf;
