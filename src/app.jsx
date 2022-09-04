import { useState, useEffect } from "react";
import { FormInput, Header, SectionCatatans } from "./components";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function App() {
  const [query, setQuery] = useState("");
  const [cariCatatans, setcariCatatans] = useState([]);
  const [catatans, setCatatans] = useState(getInitialData());

  const activeNotes = (cariCatatans || catatans).filter(
    (catatan) => !catatan.archived
  );
  const archivedNotes = (cariCatatans || catatans).filter(
    (catatan) => catatan.archived
  );
  useEffect(() => {
    setcariCatatans(
      catatans.filter((catatan) =>
        catatan.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, catatans]);

  return (
    <>
      <Header
        search={query}
        updateQuery={setQuery}
        updateCatatans={setCatatans}
      />
      <main className={style.main}>
        <FormInput updateCatatans={setCatatans} />
        <SectionCatatans
          label="Catatan Aktif"
          catatans={activeNotes}
          setCatatans={setCatatans}
        />
        <SectionCatatans
          label="Arsip"
          catatans={archivedNotes}
          setCatatans={setCatatans}
        />
      </main>
    </>
  );
}

export default App;
