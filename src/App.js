import React from 'react';
import './App.css';
//import AddBook from './Components/AddBook/AddBook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Login/Register';
//import MakeAdmin from './Components/Login/MakeAdmin';
import StudentTable from './Components/StudentTable/StudentTable';
import Navbar from './Components/Navbar/Navbar';
//import PrivateRoute from './Components/Navbar/PrivateRoute/PrivateRoute';
import BookIssueForm from './Components/BookIssueForm/BookIssueForm';
import BookacceptableTable from './Components/BookaccetableTable/BookacceptableTable';
import RecieveBookForm from './Components/RecieveBookForm/RecieveBookForm';
import useFirebase from './Hooks/UseFirebase';
import Welcome from './Components/Welcome/Welcome';

function App() {
  const {users}=useFirebase()
  console.log(users)
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> {users.email? <Welcome/> :<Login/>}  </Route>
          <Route  path="/register"> <Register/> </Route>
           {/* <PrivateRoute path="/addbook"><AddBook/>  </PrivateRoute>  */}
          {users?.email &&<Route exact path="/booklist"><StudentTable/>  </Route>}
          <Route  path="/lists/:id"> <BookIssueForm/> </Route>
          <Route path="/recivebookissue"> <BookacceptableTable/> </Route>
          {/* <Route path="/makeadmin"> <MakeAdmin/> </Route> */}
          <Route path="/recicve/:id"> <RecieveBookForm/> </Route>
                  </Switch>
      </Router>
      

    </div>
  );
}

export default App;
