import styles from "./AssinaturaNewsletter.module.scss";

export default function AssinaturaNewsletter() {
  return (
    <section>
      
      <article className={styles.article}>
        <h5>Sua casa com as</h5>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </article>

      <form className={styles.form}>
        <input
          className={styles.form__input}
          type="email"
          placeholder="Insira seu e-mail"
        />
        <button className={styles.form__button} type="button">
          Assinar newsletter
        </button>
      </form>

    </section>
  );
}
