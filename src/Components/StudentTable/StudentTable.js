import React,{useEffect,useState} from 'react';
//import DataTable from './DataTable';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
const StudentTable = () => {
    const [country,setContry]=useState([])
    const [search,setSearch]=useState('')
    const [filterData,setFilter]=useState([])
    const [searchBook,setSearchBook]=useState('computerscience')
    //console.log(searchBook)
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=AIzaSyAACG3mLEXEUEDqPCvh6ZFteaLQDnH0YbI`)
        .then(res=>res.json())
        .then(data=>{
            setContry(data.items)
            setFilter(data.items)
           // console.log(data)
        })
    },[searchBook])

    const columns=[
        {
            name:"book name",
            selector:(row)=>row.volumeInfo.title

        },
        {
            name:"Author name",
            selector:(row)=>row.volumeInfo.authors
            

        },
        {
            name:"Publishher",
            selector:(row)=>row.volumeInfo.publisher

        },
      {
        name:"action",
        selector:(row)=><Link to={`lists/${row.volumeInfo.title}`}> Book Issue</Link>
      },
     


    ]


    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    // }
    useEffect(()=>{
        const result=country.filter((country)=>{
            return country.volumeInfo.title
            .toLowerCase().match(search.toLocaleLowerCase())
        })
        setFilter(result)
    },[])

    return (
        
        <>
    
        <input className='m-auto mt-4  form-control w-25' type="text" placeholder="Search Book" onChange={(e)=>setSearchBook(e.target.value)}/> 
           {/* <input type="submit" value="submit"/> */}
        
        <DataTable 
        columns={columns} 
        data={filterData} 
        pagination 
        fixedHeader 
        selectableRows 
        selectableRowsHighlight 
        highlightOnHover  
        // actions={<button className='btn btn-sm btn-info'>Export</button>}  
        subHeader 
        // subHeaderComponent={
        //     <input type="text" 
        // placeholder='Search-here' 
        // className='form-control w-25'
        //  value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
        // }
          
        
        
/>    </> );


};

export default StudentTable;