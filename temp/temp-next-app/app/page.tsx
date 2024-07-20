import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <p className={styles.test}>Hello World</p>
      <Link href={'/here'}>go here</Link>
      <br></br>
      <Link
        className={styles.halloDa}
        href={{
          pathname: 'here',
          query: '123',
        }}
      >
        test
      </Link>
      <br></br>
      <Link href={'post'} replace>
        post
      </Link>
      <br></br>
      <Link href={'post'} prefetch={true}>
        post 2
      </Link>
      <br />
      <a href="post">post 3</a>
    </>
  )
}
