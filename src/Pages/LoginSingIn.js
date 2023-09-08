import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


import './Login.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'



export default function LoginSingIn() {

  const [action,setAction] = useState('Sign Up');
  //  const navigate= useNavigate();

 


  
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underLine"></div>
      </div>


      <div className="inputs">
        {action==="Login"? <div></div> : <div className="input">
          <FontAwesomeIcon icon={faUser} className='icn'/>
          <input type="text" placeholder='User Name'/>
        </div> }
       
        <div className="input">
          <FontAwesomeIcon icon={faEnvelope} className='icn' />
          <input type="email" placeholder='Email Address' />
        </div>
        <div className="input">
          <FontAwesomeIcon icon={faLock} className='icn'/>
          <input type="password" placeholder='Password' />
        </div>

      </div  >



         {action==="Sign Up"? <div></div> :<div className="forgot-pass">
            Forget Password? <span>Click Here</span>
              </div>}
  
     
      

      <div className="submit-container">
        
          <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{
            setAction("Login")
            // navigate('/')
            
            }}>
            Login </div>
        
      </div>
    </div>
  )
}
