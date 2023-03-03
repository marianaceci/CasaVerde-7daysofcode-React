import logo from "../../../../public/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <header className={styles.menu}>
      <div>
        <img src={logo} alt="logo da casa verde" />
      </div>
      <nav className={styles.menu__navbar}>
        <li>
          <a href="#">Como fazer</a>/
        </li>
        <li>
          <a href="#">Ofertas</a>/
        </li>
        <li>
          <a href="#">Depoimentos</a>/
        </li>
        <li>
          <a href="#">Vídeos</a>/
        </li>
        <li>
          <a href="#">Meu carrinho</a>
        </li>
      </nav>
    </header>
  );
}
