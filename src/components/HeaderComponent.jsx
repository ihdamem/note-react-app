import Input from "./InputComponent";
import style from "../styles/header.module.css";

const Header = ({ search, updateQuery }) => {
  return (
    <header className={style.container}>
      <h1 className={style.heading}>Catatan</h1>
      <Input
        value={search}
        onChange={updateQuery}
        type="search"
        id="cari_catatan"
        name="cari_catatan"
        placeholder="Cari catatan"
      />
    </header>
  );
};

export default Header;
