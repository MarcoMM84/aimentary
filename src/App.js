import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Pasti from './components/Pasti';
import Evacuazioni from './components/Evacuazioni';
import Profilo from './components/Profilo';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div>Caricamento...</div>;
  if (error) return <div>Errore: {error.message}</div>;

  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pasti" element={<Pasti />} />
          <Route path="/evacuazioni" element={<Evacuazioni />} />
          <Route path="/profilo" element={<Profilo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
