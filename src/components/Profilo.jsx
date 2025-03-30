import React, { useState, useEffect } from 'react';
import { db, auth } from "../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function Profilo() {
  const [userData, setUserData] = useState({
    name: "",
    altezza: "",
    peso: "",
    dataDiNascita: "",
    gruppoSanguigno: "",
    patologie: "",
    allergie: ""
  });
  
  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    };
    fetchUserData();
  }, []);
  
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  };
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(docRef, userData);
      alert("Dati aggiornati con successo!");
    } catch (error) {
      alert("Errore aggiornamento: " + error.message);
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profilo Utente</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" placeholder="Nome" value={userData.name} onChange={handleChange} className="mb-2 border p-2 rounded w-full" />
        <input type="text" name="altezza" placeholder="Altezza" value={userData.altezza} onChange={handleChange} className="mb-2 border p-2 rounded w-full" />
        <input type="text" name="peso" placeholder="Peso" value={userData.peso} onChange={handleChange} className="mb-2 border p-2 rounded w-full" />
        <input type="date" name="dataDiNascita" placeholder="Data di Nascita" value={userData.dataDiNascita} onChange={handleChange} className="mb-2 border p-2 rounded w-full" />
        <input type="text" name="gruppoSanguigno" placeholder="Gruppo Sanguigno" value={userData.gruppoSanguigno} onChange={handleChange} className="mb-2 border p-2 rounded w-full" />
        <textarea name="patologie" placeholder="Patologie" value={userData.patologie} onChange={handleChange} className="mb-2 border p-2 rounded w-full"></textarea>
        <textarea name="allergie" placeholder="Allergie" value={userData.allergie} onChange={handleChange} className="mb-2 border p-2 rounded w-full"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Aggiorna Profilo</button>
      </form>
    </div>
  );
}

export default Profilo;
