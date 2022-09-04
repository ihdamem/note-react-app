import style from "../styles/section-notes.module.css";
import Card from "./CardComponent";

const SectionCatatans = ({ label, catatans, setCatatans }) => {
  return (
    <section>
      <h2 className={style.heading}>{label}</h2>
      {catatans.length === 0 ? (
        <p className={style.empty_catatan}>Tidak ada catatan.</p>
      ) : (
        <div className={style.list_of_catatans}>
          {catatans?.map((catatan) => (
            <Card key={catatan.id} action={setCatatans} {...catatan} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionCatatans;
