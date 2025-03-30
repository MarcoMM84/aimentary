import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const toggleMode = () => setIsLogin(!isLogin);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert("Errore login: " + error.message);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Salva i dati aggiuntivi in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name,
          email,
          createdAt: new Date(),
          altezza: null,
          peso: null,
          dataDiNascita: null,
          gruppoSanguigno: null,
          patologie: "",
          allergie: ""
        });
      } catch (error) {
        alert("Errore registrazione: " + error.message);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">{isLogin ? "Login" : "Registrazione"}</h2>
        {!isLogin && (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2 w-full border p-2 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full border p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          {isLogin ? "Login" : "Registrati"}
        </button>
        <p className="mt-4 text-center">
          {isLogin ? "Non hai un account?" : "Hai già un account?"}{" "}
          <span onClick={toggleMode} className="text-blue-500 cursor-pointer">
            {isLogin ? "Registrati" : "Login"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Auth;
