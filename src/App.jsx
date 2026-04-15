// App.jsx
import React from 'react';
import JasDevProfile from './JasDevProfile';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
      {/* Passing the descriptive jasDevFullName prop */}
      <JasDevProfile jasDevFullName="Jaswant Sharma" />
    </div>
  );
}

export default App;