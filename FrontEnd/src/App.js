import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Grooming } from './components/grooming';
import { Login } from './components/login/login';

import { Dashboard } from './components/login/dashboard/dashboard';
import CreateStudent from './components/login/dashboard/createstudent/createstudent';
import UpdateStudent from './components/login/dashboard/createstudent/updatestudent/updatestudent';
// import Createstudent from './components/login/dashboard/create_student/createstudent';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Grooming/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/createStudent' element={<CreateStudent/>}/> 
      <Route path='/updateStudent/:student_id' element={<UpdateStudent/>}/>
 
       
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
