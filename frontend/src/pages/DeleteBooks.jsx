import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleDeleteBook = () => {
        setLoading(true);
        axios 
        .delete(`http://localhost:8010/books/${id}`)
        .then(() => {
            setLoading(false);
            navigate('/');
        })
        .catch((error) =>{
            setLoading(false);
            alert('An error happend.Please Check console');
            console.log(error);
        });
    }
    return (
     <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <h3 className='text-2xl'>Are you Sure Want to delete this book?</h3>
      <button 
       className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
        Yes, Delete it
       </button>
      </div>
      </div>
    )
}

export default DeleteBook