import React, { useState } from 'react';
import { db, auth } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Pasti() {
  const [categoria, setCategoria] = useState("colazione");
  const [descrizione, setDescrizione] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users", auth.currentUser.uid, "pasti"), {
        categoria,
        descrizione,
        createdAt: serverTimestamp()
      });
      setDescrizione("");
      alert("Pasto aggiunto!");
    } catch (error) {
      console.error("Errore aggiunta pasto:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inserisci Pasto</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="mb-2 border p-2 rounded w-full"
        >
          <option value="colazione">Colazione</option>
          <option value="pranzo">Pranzo</option>
          <option value="merenda">Merenda</option>
          <option value="cena">Cena</option>
          <option value="spuntino">Spuntino</option>
        </select>
        <textarea 
          value={descrizione} 
          onChange={(e) => setDescrizione(e.target.value)} 
          placeholder="Descrivi il pasto (ingredienti, quantità, orario)..."
          className="w-full border p-2 rounded mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Aggiungi Pasto</button>
      </form>
    </div>
  );
}

export default Pasti;
