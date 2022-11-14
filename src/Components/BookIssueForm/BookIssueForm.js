import React, {  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const BookIssueForm = () => {
    const [bookissue,setBookIssue]=useState({})
    const {id}=useParams()
    console.log(id)
    const history=useHistory()

    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...bookissue };
        newData[field] = value
        setBookIssue(newData)
        //console.log(loginData)

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        

            fetch('http://localhost:5000/bookissue',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({bookissue,id,reciveData:""} )
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                alert("Data added successfully");
                history.push('/recivebookissue')
            })
        
        
    }
    return (
        <div className='col-md-3 m-auto mt-5 p-5 text-light bg-secondary'>
            <div className='form-group'>
           <form onSubmit={handleSubmit}>
           <label for="book">Book Name</label>
            <input className='form-control'  defaultValue={id} id="book" readOnly name=""/>
            <label for="student_name">Student Name</label>
            <input required className='form-control' onBlur={handleBlur} id="student_name" name="student_name" type="text" placeholder='student name'/>
            <label for="student_id">Student Id</label>
            <input required className='form-control' onBlur={handleBlur} name="student_id" id="student_id" type="text" placeholder="student id"/>
            <label for="dept_name">Dept Name</label>
            <input required className='form-control' onBlur={handleBlur} id="dept_name" name="dept_name" type="text" placeholder="dept name"/>
            <label for="session">session</label>
            <input required className='form-control' id="session" onBlur={handleBlur} type="text" name='session' placeholder="session"/>
            <label for="date">Date</label>
            <input className='form-control' id="date" required onBlur={handleBlur} type="date" name="date" />
            <br/>
            <input className='form-control' type="submit" value="submit"/>


        </form>
        </div>
        </div>
        
    );
};

export default BookIssueForm;