import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.HeaderContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}
