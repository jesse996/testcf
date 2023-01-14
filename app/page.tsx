
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

async function getData() {
  let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await res.json()
  return data
}

export default async function Home() {
  let data = await getData()

  return (
    <main className={styles.main}>
      {JSON.stringify(data)}
    </main>
  )
}
