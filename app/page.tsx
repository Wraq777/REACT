'use client'

import styles from './page.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form action="mailto:janusz@kowalski.pl" method="POST">
        <div className={styles.form}>
          <h1 className={styles.header}>
            Formularz Logowania (124486 Jakub Rój)
          </h1>
          <p className={styles.subheader}>
            Zaloguj się do naszego serwisu
          </p>

          <div className={styles.field}>
            E-mail:{" "}
            <input type="text" name="Email" className={styles.input} />
          </div>

          <div className={styles.field}>
            Hasło:{" "}
            <input type="password" name="Haslo" className={styles.input} />
          </div>

          <div className={styles.options}>
            <input type="checkbox" name="remember" id="remember" className={styles.checkbox} />
            <label htmlFor="remember">Pamiętaj mnie</label>
            <a href="/forgot" className={styles.link}>Zapomniałeś hasła?</a>
          </div>

          <div className={styles.submitWrapper}>
            <input
              type="submit"
              value="Zaloguj"
              className={styles.submit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
