import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
const BookacceptableTable = () => {
    const [bookData,setBookData]=useState([])
    const [search,setSearch]=useState('')
    const [filterData,setFilter]=useState([])
    console.log(filterData)

    const [recieved,setRecived]=useState('')

    
    //console.log(filterData);

    useEffect(()=>{
        fetch('https://library-server-indol.vercel.app/bookissue')
        .then(res=>res.json())
        .then(data=>{
            setBookData(data);
            setFilter(data)
           // console.log(data);
        })

    },[])


     // useEffect(()=>{
       // fetch(`/book/${bookData.id}`,{
         // method: 'PUT',
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'React PUT Request Example' })
       // })
      //},[])


    const columns=[
        {
            name:"book name",
            selector:(row)=>row.id

        },
        {
            name:"student name",
            selector:(row)=>row.bookissue.student_name,

            

        },
        {
            name:"student id",
            selector:(row)=>row.bookissue.student_id,

        },
      {
        name:"session",
         selector:(row)=>row.bookissue.session,
      },
      {
        name:"dept-name",
        selector:(row)=>row.bookissue.dept_name,
      },
      {
        name:"bookissue date",
        selector:(row)=>row.bookissue.date,
      },
      {
        name:"action",
        selector:(row)=> <Link to={`/recicve/${row._id}`}>   <button disabled={row.recieve}  className={`${row.recieve?'btn btn-primary':'btn btn-danger'}`}>{row.recieve?'recieved':'pending'}</button></Link>
      },
      {
        name:"recieve date",
        selector:(row)=>row.recieve

      },


     

    ]

   
    useEffect(()=>{
      const result=bookData.filter((book)=>{
        const query=search.toLowerCase()
        return (
          book.bookissue.student_name.toLowerCase().indexOf(query) >= 0 ||
          book.bookissue.student_id.toLowerCase().indexOf(query) >= 0 
          
        )
      })
        
         
      setFilter(result)
  },[search])

  // book.bookissue.student_id.toLowerCase() || book.bookissue.student_name)
  // .toLowerCase().includes(search.toLocaleLowerCase())
    return (
            


     <DataTable 
    columns={columns} 
    data={filterData} 
    pagination 
   fixedHeader 
   selectableRows 
   selectableRowsHighlight 
   highlightOnHover  
 
     subHeader 
    subHeaderComponent={
    <input type="text" 
     placeholder='Search-here' 
     className='form-control w-25'
     value={search} onChange={(e)=>setSearch(e.target.value)}/>

}
  


/>
    );
};

export default BookacceptableTable;