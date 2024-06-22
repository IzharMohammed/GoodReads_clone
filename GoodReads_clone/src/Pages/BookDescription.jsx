import Layout from '../Layouts/Layout'
import React, { useEffect } from 'react'
import image from '../Assets/onePiece.jpeg'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllShelfs } from 'Redux/Slice/ShelfSlice';

function BookDescription() {
const {state}=useLocation();
console.log('location',state);
const shelfState = useSelector(state => state.shelf);
console.log(shelfState.shelfList);
const dispatch = useDispatch();
const loadShelves = () =>{
  dispatch(getAllShelfs())
}

useEffect(()=>{
  loadShelves();
},[])


  return (
    <Layout>
    <div className=' h-[140vh]  flex gap-8 w-3/4 m-auto'>
        <div className='my-16 '>
        <img className='h-[65vh] max-w-[65vh]' src={image} alt="" />
        </div>
        <div className='text-white flex flex-col my-16  gap-8'>
            <div className='text-5xl'>{state.title}</div>
            <div className='flex flex-col text-xl text-center border border-white h-[30vh] justify-around items-'>
            <div className='text-2xl '>Description :- {state.description}</div>
      {/*       <div>Writer</div>
            <div>genre</div> */}
            <div>pages : {state.pages}</div>
            <div>Publish Date :- {state.publishDate}</div>
      
            </div>
            <details className="dropdown mb-32 ml-28 ">
                <summary className="m-1 btn w-[40vh] text-white">Add to Shelf</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {
                  shelfState.shelfList && shelfState.shelfList.map(shelf=>{
                    return <li className='btn w-[40vh] my-4 btn-success'>{shelf.name}</li>
                  })
                }
                </ul>
            </details>
        </div>
     
    </div>
    </Layout>
  )
}

export default BookDescription