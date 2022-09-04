import style from "../styles/card.module.css";
import { showFormattedDate } from "../utils";
import Button from "./ButtonComponent";

const Card = ({ id, title, createdAt, body, archived, action }) => {
  const hapusCatatan = (item) =>
    action((catatans) => catatans.filter((catatan) => catatan.id !== item));
  const toggleArchive = (item) => {
    action((catatans) =>
      catatans.map((catatan) => {
        if (catatan.id === item) {
          return { ...catatan, archived: !catatan.archived };
        }
        return catatan;
      })
    );
  };

  return (
    <article id={id} className={style.card}>
      <header className={style.card_header}>
        <h3 className={style.heading}>{title}</h3>
        <small className={style.date}>{showFormattedDate(createdAt)}</small>
        <p className={style.note}>{body}</p>
      </header>
      <footer className={style.card_footer}>
        <Button eventHandler={() => hapusCatatan(id)} label="hapus" />
        <Button
          eventHandler={() => toggleArchive(id)}
          label={archived ? "unarsip" : "arsip"}
        />
      </footer>
    </article>
  );
};

export default Card;
