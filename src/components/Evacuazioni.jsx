import React, { useState } from 'react';
import { db, auth } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ChartComponent from "./ChartComponent";

function Evacuazioni() {
  const [contatore, setContatore] = useState(0);
  const [consistenza, setConsistenza] = useState("liquida");
  const [colore, setColore] = useState("giallo");
  const [gonfiore, setGonfiore] = useState(0);
  const [crampi, setCrampi] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users", auth.currentUser.uid, "evacuazioni"), {
        contatore,
        consistenza,
        colore,
        gonfiore,
        crampi,
        createdAt: serverTimestamp()
      });
      alert("Dati evacuazione salvati!");
    } catch (error) {
      console.error("Errore salvataggio evacuazioni:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Inserisci Dati Evacuazioni</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block">Numero di volte in bagno:</label>
          <input 
            type="number" 
            value={contatore} 
            onChange={(e) => setContatore(parseInt(e.target.value))}
            className="border p-2 rounded w-full"
            min="0"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block">Consistenza:</label>
          <select value={consistenza} onChange={(e) => setConsistenza(e.target.value)} className="border p-2 rounded w-full">
            <option value="liquida">Liquida</option>
            <option value="molto_morbida">Molto morbida</option>
            <option value="media">Media</option>
            <option value="solida">Solida</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block">Colore feci:</label>
          <select value={colore} onChange={(e) => setColore(e.target.value)} className="border p-2 rounded w-full">
            <option value="giallo">Giallo</option>
            <option value="marrone_chiaro">Marrone chiaro</option>
            <option value="marrone_rossastro">Marrone tendente al rosso</option>
            <option value="marrone">Marrone</option>
            <option value="marrone_scuro">Marrone scuro</option>
            <option value="verde_scuro">Verde scuro</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block">Gonfiore (0-10): {gonfiore}</label>
          <input 
            type="range" 
            min="0" max="10" 
            value={gonfiore} 
            onChange={(e) => setGonfiore(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block">Crampi (0-10): {crampi}</label>
          <input 
            type="range" 
            min="0" max="10" 
            value={crampi} 
            onChange={(e) => setCrampi(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Salva Dati</button>
      </form>
      <ChartComponent />
    </div>
  );
}

export default Evacuazioni;
