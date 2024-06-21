import React, { useEffect } from 'react'
import bookImage from 'Assets/onePiece.jpeg'
import { FaRegUser } from "react-icons/fa";
import { getAllBooks } from 'Redux/Slice/BookSlice';
import { useSelector ,useDispatch} from 'react-redux';

function BookCard() {
    const dispatch = useDispatch()
const state = useSelector(state=>state.books);
const state1 = useSelector(state=>state.auth);


const fetchBooks = async () =>{
    const response = await dispatch(getAllBooks());
    console.log(response);
}
useEffect(()=>{
    fetchBooks();
},[])

  return (
    <div className='w-full h-[50vh] mb-12 mt-4'>
        <div className='flex  border border-white gap-16 p-4 rounded-lg w-3/5 m-auto  h-[43vh] '>
            <div  >
        <img className=' h-[36vh]' src={bookImage} alt="" />
            </div>
            <div className='flex  flex-col justify-between'>
                <div className='text-3xl text-white'><h1>Game of thrones book</h1></div>
                <div className='flex gap-4'>
                <FaRegUser />
                    <span className='mb-8'>Geroge RR Martin </span>
                    </div>
                <div className='flex flex-col gap-4 '>
                    <div className='text-xl'>The build is jajahahjalajajlama lormanan ahjhha hyya ya yaaaaaaaaaaaa</div>
                    <div className='btn btn-primary w-2/5 m-auto'>Details</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookCard