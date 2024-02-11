import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, signInUsingGoogle}=useFirebase()
    //const [welcome,setWelcome]=useState(false)
    //console.log(user)
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)


    }

    return (
        <div className='login'>
                
                <div className='text-center bg-light'><h4>Welcome To MBSTU Seminer Library</h4></div>
                <br/>
              
            <div className='col-md-3 m-auto border border-primary bg-dark text-light p-5'>
                    <p className='text-center mt-5'>Log-in</p>
                   
                    <form onSubmit={handleLogInSubmit}>
                    <label>Email</label>
                        <input name="email" type="email" className='form-control' onChange={handleChange}  />
                        <label>Password</label>
                        < input name="password" className='form-control' onChange={handleChange} id="standard-basic" type="password"  />
                        <br/>
                        <button className='form-control btn btn-success' type="submit" variant='contained'>LOGIN</button>

                        <Link to="/register">  <p className='text-light'>NEW USER?PLEASE REGISTER</p> </Link>
                       
                        <p>-----------?----------</p>
                        <button className='btn btn-warning' onClick={()=>signInUsingGoogle(location,history)}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;