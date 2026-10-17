import { useState } from "react";
import ClimaCard from "./components/ClimaCard";
import FragmentBarato from "./components/FragmentBarato";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import { useCharacteres } from "./hooks/useCharacteres";

function App() {
  const [page, setPage] = useState(1);
  const { character, totalPages, loading, error } = useCharacteres(page);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>El clima de hoy</h1>
        <p>Explora el maravilloso clima del mundo</p>
      </header>

      <FragmentBarato />

      <main className="cards-grid" style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
        <ClimaCard
          latitude={21.12}
          longitude={-101.68}
          elevation={1815}
          timezone="America/Mexico_City"
          temperature={22}
        />
      </main>

      <section className="app" style={{ padding: "20px" }}>
        <h2>Rick and Morty</h2>

        {loading && <p>Cargando...</p>}
        {error && <p role="alert">Ocurrió un error: {error}</p>}

        <CharacterList character={character} />

        <Pagination
          page={page}
          totalPage={totalPages}
          onPrev={() => setPage((p) => p - 1)}
          onNext={() => setPage((p) => p + 1)}
        />
      </section>
    </div>
  );
}

export default App;