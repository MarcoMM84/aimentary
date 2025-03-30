import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Home() {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="w-full p-4 flex justify-between items-center bg-green-100">
        <img src="/icons/logo_aimentary.png" alt="Logo A.I.mentary" className="w-32" />
        <div>
          <button onClick={() => navigate('/profilo')} className="mr-2 text-blue-500">Profilo</button>
          <button onClick={handleSignOut} className="text-red-500">Logout</button>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-2xl font-bold mb-4">Benvenuto in A.I.mentary</h1>
        <div className="grid grid-cols-2 gap-8">
          <div onClick={() => navigate('/pasti')} className="cursor-pointer flex flex-col items-center">
            <img src="/icons/pasto.png" alt="Pasti" className="w-16 h-16" />
            <p>Pasti</p>
          </div>
          <div onClick={() => navigate('/evacuazioni')} className="cursor-pointer flex flex-col items-center">
            <img src="/icons/evacuazione.png" alt="Evacuazioni" className="w-16 h-16" />
            <p>Evacuazioni</p>
          </div>
          <div onClick={() => navigate('/report')} className="cursor-pointer flex flex-col items-center">
            <img src="/icons/calendario.png" alt="Report" className="w-16 h-16" />
            <p>Report</p>
          </div>
          <div onClick={() => navigate('/chat')} className="cursor-pointer flex flex-col items-center">
            <img src="/icons/chat.png" alt="Chat I.A." className="w-16 h-16" />
            <p>Chat I.A.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
