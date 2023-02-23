"use client";
import SearchBar from '@components/SearchBar';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'


export default function Home() {
  const router = useRouter();

  const handleRoute1 = () => {
    router.push('my-bounties')
  }

  const handleRoute2 = () => {
    router.push('fsafsafsa')
  }
  return (
    <main className={styles.main}>
      <SearchBar/>
      <div onClick={handleRoute1}>route my bounties</div>
      <div onClick={handleRoute2}>route random</div>
    </main>
  )
}
