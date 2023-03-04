import styles from './CardCentral.module.scss';

export default function CardCentral() {
  return (
    <section className={styles.container}>
      <img src="../../../../public/card-central.png" alt="foto de uma planta" />
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