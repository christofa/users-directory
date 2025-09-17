import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AxiosPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(users);
  return (
    <div className="border p-4 m-4 ">
      <h1 className="text-2xl text-center font-bold mb-4 text-green-500">
        User Directory for Ire-akari Estate residents fetched with the fetch API
      </h1>

      
      {users.map((items) => {
        return (
          <div key={items.id} className="flex flex-col border-b p-4 m-4 gap-4">
            <div className="flex gap-3">
            Residents Name: <p>{items.name}</p>
            </div>
            
            <div className="flex gap-3">
                Residents Email:
                <p>{items.email}</p>
            </div>

            <div className="flex gap-3">
                Residents Phone Number:
               <p>{items.phone}</p> 
            </div>
    
          </div>
        );
      })}
    </div>
  );
}

export default AxiosPage;
