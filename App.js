import React, { useState } from 'react';

    const Tab = ({ label, icon, isActive, onClick }) => (
      <div
        onClick={onClick}
        style={{
          flex: 1,
          textAlign: 'center',
          padding: '10px 0',
          background: isActive ? '#d4efdf' : '#ecf0f1',
          transition: 'background 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <div style={{ fontSize: '20px' }}>{icon}</div>
        <div style={{ fontSize: '12px' }}>{label}</div>
      </div>
    );

    const screens = {
      Home: <div><h2>Benvenuto in A.I.mentary</h2><p>“Ogni piccolo passo verso il benessere conta.”</p></div>,
      Diario: <div><h2>Diario</h2><p>Registra i tuoi pasti, sintomi ed evacuazioni.</p></div>,
      Report: <div><h2>Report</h2><p>Statistiche e andamento della tua salute.</p></div>,
      Profilo: <div><h2>Profilo</h2><p>Gestione dati personali e impostazioni.</p></div>,
      Chat: <div><h2>Chat I.A.</h2><p>Parla con l'assistente per consigli e supporto.</p></div>,
    };

    const App = () => {
      const [activeTab, setActiveTab] = useState('Home');

      return (
        <div style={{ fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <div style={{ flex: 1, padding: '20px', transition: 'all 0.5s ease-in-out' }}>
            {screens[activeTab]}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
            <Tab label="Home" icon="🏠" isActive={activeTab === 'Home'} onClick={() => setActiveTab('Home')} />
            <Tab label="Diario" icon="🍽️" isActive={activeTab === 'Diario'} onClick={() => setActiveTab('Diario')} />
            <Tab label="Report" icon="📊" isActive={activeTab === 'Report'} onClick={() => setActiveTab('Report')} />
            <Tab label="Profilo" icon="👤" isActive={activeTab === 'Profilo'} onClick={() => setActiveTab('Profilo')} />
            <Tab label="Chat I.A." icon="💬" isActive={activeTab === 'Chat'} onClick={() => setActiveTab('Chat')} />
          </div>
        </div>
      );
    };

    export default App;