import { useState } from "react";
import ClimaCard from "./components/ClimaCard";
import FragmentBarato from "./components/FragmentBarato";




function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>El clima de hoy</h1>
        <p>Explora el maravilloso clima del mundo</p>
      </header>

 
      <FragmentBarato />

      <main className="cards-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
        <ClimaCard 
          latitude={21.12}
          longitude={-101.68}
          elevation={1815}
          timezone="America/Mexico_City"
          temperature={22}
        />
      </main>
    </div>
  );
}

export default App;