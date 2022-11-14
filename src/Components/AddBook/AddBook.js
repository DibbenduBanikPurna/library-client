import React, { useState,useEffect } from 'react';

const AddBook = () => {
    const [book,setBook]=useState()
    useEffect(()=>{
        fetch('https://www.googleapis.com/books/v1/volumes?q=computerscience&key=AIzaSyAACG3mLEXEUEDqPCvh6ZFteaLQDnH0YbI')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.items)
            setBook(data.items)
        })
    },[])
   
    const handleBlur=(e)=>{

    }
    useEffect(()=>{

        fetch('http://localhost:5000/allbooks',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book )
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    
    },[])
   
    
    return (
        <>
        <form>
            <input name="book-name" onBlur={handleBlur} placeholder="book-name" />
            <br/>
            <input type="text" name="writter-name" onBlur={handleBlur} placeholder="writter-name"/>
            <br/>
            <input type="submit" value="submit"/>
        </form>
        <button>Post</button>
        </>
    );
};

export default AddBook;