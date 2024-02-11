import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

const Navbar = () => {
  const {users,logOut}=useFirebase()
  console.log(users)
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/"><span className='m-5'><img style={{height:'45px'}}  src="https://mbstu.ac.bd/assets/images/logo.png"/></span></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav m-auto">
            <Link className="nav-item nav-link active" to="/">Home </Link>
            {users?.email &&<Link className="nav-item nav-link" to="/booklist">Book Issue</Link>}
            {users?.email &&<Link className="nav-item nav-link" to="/recivebookissue">Book Recive</Link>}
              {users.email ? <Link className="nav-item nav-link" to="/"> <span onClick={logOut}>Logout</span>  </Link>:''}
              {users.email ? <span className="nav-item nav-link" >  {users.displayName}  </span>:''}
          </div>
        </div>
      </nav>
    );
};

export default Navbar;