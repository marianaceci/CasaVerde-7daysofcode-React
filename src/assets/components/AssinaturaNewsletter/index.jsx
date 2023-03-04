import { useEffect, useState } from "react";
import styles from "./AssinaturaNewsletter.module.scss";

export default function AssinaturaNewsletter() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [ehValido, setEhValido] = useState(false);

  const valida = () => {
    return email;
  }

  useEffect(() => {
    const ehValido = valida();
    setEhValido(ehValido);
  }, [email]);

  function emailEhValido(email) {
    return (/\S+@\S+\.\S+/).test(email);
  }

  const handleChange = event => {
    setEmail(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    setError(null);

    if (emailEhValido(email)) {
      alert('email é valido');
    } else {
      setError('email é inválido');
    }
  }


  return (
    <section className={styles.newsletter}>      
      <article className={styles.article}>
        <h5>Sua casa com as</h5>
        <h1>melhores plantas</h1>
        <p>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
      </article>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.form__input}
          type="email"
          placeholder="Insira seu e-mail"
          value={email}
          onChange={handleChange}
        />
        <button
          disabled={!ehValido}
          className={styles.form__button}
          type="submit"
        >
          Assinar newsletter
        </button>
        {error && <h2 style={{color: 'red'}}>{error}</h2>}
      </form>

    </section>
  );
}
