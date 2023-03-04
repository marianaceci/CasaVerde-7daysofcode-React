import styles from './CardCentral.module.scss';
import foto from '/card-central.png';

export default function CardCentral() {
  return (
    <section className={styles.container}>
      <img src={foto} alt="foto de uma planta" />
      <div className={styles.container__texto}>
        <h5>Como conseguir</h5>
        <h2>minha planta</h2>
        <ul>
          <li>Escolha suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </div>
    </section>
  )
}