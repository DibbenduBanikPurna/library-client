import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/UseFirebase';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    console.log(loginData)

    const history = useHistory()

    const { signUp, isLoading,  users } = useFirebase()
    console.log(users)
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)
        //console.log(loginData)

    }
    const handleLogInSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)

        if (loginData.password !== loginData.re_password) {
            alert("Your password did not match!!")
            return;
        }
        signUp(loginData.name, loginData.email, loginData.password, history)
    }
    return (
        <div className='bg-light'>
        <div className='row'>
            <div className='col-md-3 m-auto mt-5'>
                <div className='card'>
                    <div className='card-body'>
                    <h4 className='text-center'>Register</h4>
                     <form className='' onSubmit={handleLogInSubmit}>
                        <label>User-Name</label>
                    <input name="name" type="text" onChange={handleChange} placeholder='Enter Name'  label="Your Name" className='form-control' />
                    <label>Email</label>
                    <input name="email" type="email" onChange={handleChange} placeholder='Enter Email' label="Your Email" className='form-control' />
                    <label>Password</label>
                    < input name="password" onChange={handleChange}  type="password"  placeholder="Your Password" className='form-control' />
                    <label>Re-Type Password</label>
                    <input name="re_password" onChange={handleChange}  type="password" placeholder="ReType Your Password" className='form-control' />

                    <button className='btn btn-success form-control mt-2'  type="submit" variant='contained'>Register</button>
                    <br/>
                    <Link to="/">  <p className='text-dark mt-4'>ALready Sign Up?PLEASE LOGIN</p> </Link>
                </form>
               
                    </div>
                </div>
               
              
            </div>

          
        </div>

    </div>
    );
};

export default Register;