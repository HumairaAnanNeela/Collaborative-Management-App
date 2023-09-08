import React from 'react'
import { v4 as uuid } from 'uuid';


const users=[


  {
    id:uuid,
    Nmae:"Humaira Anan Neela",
    Age:24,
    Phone: "017456691",
    Address: "Dhaka",

  },

  {
    id:uuid,
    Nmae:"John",
    Age:30,
    Phone: "017456691",
    Address: "Dhaka",

  },

  {
    id:uuid,
    Nmae:"Mark",
    Age:26,
    Phone: "017456691",
    Address: "Dhaka",

  },

  {
    id:uuid,
    Nmae:"Rafa",
    Age:25,
    Phone: "017456691",
    Address: "Dhaka",

  },

  {
    id:uuid,
    Nmae:"Karim",
    Age:35,
    Phone: "017456691",
    Address: "Dhaka",

  },
];

const TeamMembers = () => {
  return (
    <div>
      <h1>TeamMembers</h1>

      {users.map((user)=>(
        <article key={user.id}>
             <p>Full Name:{user.Nmae}</p>
             <p>Age:{user.Age}</p>
             <p>Phone Number:{user.Phone}</p>
             <p>Address:{user.Address}</p>
             <br />

         </article>
         
      ))
      }

    </div>
  )
}

export default TeamMembers