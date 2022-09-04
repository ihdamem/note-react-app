import { useState } from "react";
import Input from "./InputComponent";
import style from "../styles/form-input.module.css";

const FormInput = ({ updateCatatans }) => {
  const [title, setTitle] = useState("");
  const [catatan, setCatatan] = useState("");

  const buatCatatan = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateCatatans((catatans) => [
      ...catatans,
      {
        id: timestamp,
        title,
        body: catatan,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form className={style.form} onSubmit={buatCatatan}>
      <h2 className={style.heading}>Buat Catatan</h2>
      <small className={style.small}>
        Karakter Tersisa:{" "}
        <span className={style.counter}>{100 - title.length}</span>
      </small>
      <Input
        value={title}
        onChange={setTitle}
        type="text"
        placeholder="Judul catatan"
        id="title"
        name="title"
        required
      />
      <Input
        value={catatan}
        onChange={setCatatan}
        type="textarea"
        placeholder="Buat catatan"
        id="catatan"
        name="catatan"
        required
      />
      <Input type="submit" id="submit_form" name="submit_form" value="Buat" />
    </form>
  );
};

export default FormInput;
