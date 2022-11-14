import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const RecieveBookForm = () => {
    const [studentInfo,setStudentInfo]=useState({})
    //const [reciveDate,setReciveDate]=useState('')
    const {id}=useParams()
    //console.log(studentInfo)
    
    const history=useHistory()
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"




    useEffect(()=>{
        //console.log(id)
        fetch(`http://localhost:5000/bookdata/${id}`)
        
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            setStudentInfo(data)
        })
    },[])
    // const handleBlur=(e)=>{

    // }

    const handleSubmit=e=>{
        e.preventDefault()
        fetch(`http://localhost:5000/bookdata/${studentInfo._id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(  {currentDate})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            history.push('/recivebookissue')
        })
       
    }
    return (
        <div className='col-md-3 m-auto '>
        <div className='form-group'>
       <form onSubmit={handleSubmit}>
       <label for="book">Book Name</label>
        <input className='form-control'  defaultValue={studentInfo.id} id="book" readOnly name=""/>
        <label for="student_name">Student Name</label>
        <input required className='form-control'  defaultValue={studentInfo?.bookissue?.student_name} id="student_name" readOnly name="student_name" />
         <label for="student_id">Student Id</label>
        <input required className='form-control' defaultValue={studentInfo?.bookissue?.student_id} readOnly name="student_id" id="student_id" />
        <label for="dept_name">Dept Name</label>
        <input required className='form-control' defaultValue={studentInfo?.bookissue?.dept_name} readOnly id="dept_name" name="dept_name"/>
        <label for="session">session</label>
        <input required className='form-control' defaultValue={studentInfo?.bookissue?.session} readOnly id="session"  name='session' />
        {/* <label for="date">Recived Date</label> 
        <input className='form-control' id="date" required onChange={(e)=>setReciveDate(e.target.value)} type="date" name="date" /> */}
        <br/>
        <input className='form-control' type="submit" value="Confirmed"/>


    </form> 
    </div>
    </div>
    );
};

export default RecieveBookForm;