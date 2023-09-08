import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom';


// import LoginSingIn from './components/LoginSingIn';
// import CONDITIONAL_RENDER from './components/CONDITIONAL_RENDER';

import HomePage from './Pages/HomePage';
import LoginSingIn from './Pages/LoginSingIn';
import MenuBar from './components/MenuBar';
import Task from './Pages/Task';
import TeamMembers from './Pages/TeamMembers';
import Programs from './Pages/Programs';

// import Signup from './Pages/SignUpPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <MenuBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/loginPage' element={<LoginSingIn/>} />
          <Route path='/task' element={<Task/>} />
          <Route path='/teamMembers' element={<TeamMembers/>} />
          <Route path='/programs' element={<Programs/>} />






        </Routes>


      </BrowserRouter>
     
    </div>
  );
}

export default App;
