import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl">Welcome to my API integration project</h1>
      <div className="flex gap-4">
        
          <Link to="/fetch" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Fetch User Directory</Link>

          <Link to="/axios" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Axios User Directory</Link>
          
            <Link to="/UserReg" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Residents Registration</Link>
      </div>
    </div>
  );
}

export default Home;
