import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sesso: '',
    altezza: 170,
    peso: 70,
    giorno: '1',
    mese: '1',
    anno: '2000',
    registrato: false
  });

  const anni = Array.from({ length: 100 }, (_, i) => 2025 - i);
  const giorni = Array.from({ length: 31 }, (_, i) => i + 1);
  const mesi = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setFormData(prev => ({ ...prev, registrato: true }));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <img src="/icons/logo_aimentary.png" alt="Logo A.I.mentary" style={{ width: 120, marginBottom: '10px' }} />
      <h1 style={{ color: '#4CAF50' }}>A.I.mentary</h1>
      {!formData.registrato ? (
        <div>
          <input type="text" name="nome" placeholder="Nome" onChange={handleChange} style={{ margin: '5px' }} /><br />
          <select name="sesso" onChange={handleChange} style={{ margin: '5px' }}>
            <option value="">Sesso</option>
            <option value="M">Maschio</option>
            <option value="F">Femmina</option>
          </select><br />
          <label>Altezza: {formData.altezza} cm</label><br />
          <input type="range" name="altezza" min="130" max="220" value={formData.altezza} onChange={handleChange} /><br />
          <label>Peso: {formData.peso} kg</label><br />
          <input type="range" name="peso" min="30" max="200" value={formData.peso} onChange={handleChange} /><br />
          <label>Data di nascita:</label><br />
          <select name="giorno" onChange={handleChange} style={{ margin: '2px' }}>{giorni.map(d => <option key={d}>{d}</option>)}</select>
          <select name="mese" onChange={handleChange} style={{ margin: '2px' }}>{mesi.map(m => <option key={m}>{m}</option>)}</select>
          <select name="anno" onChange={handleChange} style={{ margin: '2px' }}>{anni.map(a => <option key={a}>{a}</option>)}</select><br />
          <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Continua</button>
        </div>
      ) : (
        <div>
          <p>Benvenuto {formData.nome}!</p>
          <p>Ora puoi accedere alle sezioni principali.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/pasto.png" alt="Diario" style={{ width: 64, height: 64 }} />
              <p>Diario</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/evacuazione.png" alt="Evacuazioni" style={{ width: 64, height: 64 }} />
              <p>Evacuazioni</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/attivita.png" alt="Attività" style={{ width: 64, height: 64 }} />
              <p>Attività</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/calendario.png" alt="Calendario" style={{ width: 64, height: 64 }} />
              <p>Calendario</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/farmaci.png" alt="Farmaci" style={{ width: 64, height: 64 }} />
              <p>Farmaci</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/stomaco.png" alt="Sintomi" style={{ width: 64, height: 64 }} />
              <p>Sintomi</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/umore.png" alt="Umore" style={{ width: 64, height: 64 }} />
              <p>Umore</p>
            </div>
            <div style={{ margin: '10px', textAlign: 'center' }}>
              <img src="/icons/foglia.png" alt="Consigli" style={{ width: 64, height: 64 }} />
              <p>Consigli</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;