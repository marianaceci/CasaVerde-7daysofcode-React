import { ofertas } from "./ofertas.jsx";
import styles from "./Ofertas.module.scss";

export default function Ofertas() {
  return (
    <div className={styles.ofertas}>
      <h4>Conheça nossas</h4>
      <h2>ofertas</h2>
      <section className={styles.cards}>
        {ofertas.map((oferta) => (
          <div key={oferta.nome} className={styles.cards__card}>
            <img src={oferta.img} alt={`foto da planta ${oferta.nome}`} />
            <div className={styles.cards__card__texto}>
              <h3>{oferta.nome}</h3>
              <h6>R$ 20,00</h6>
              <span>Comprar</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
