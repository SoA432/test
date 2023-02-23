"use client";
import SearchBar from '@components/SearchBar';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'


export default function Home() {
  const router = useRouter();

  const handleRoute1 = () => {
    router.push('mybounties')
  }

  const handleRoute2 = () => {
    router.push('bounties')
  }

  const handleRoute3 = () => {
    router.push('bounties/fsafsafsa')
  }
  return (
    <main className={styles.main}>
      <SearchBar/>
      <div onClick={handleRoute1}> /mybounties </div>
      <div onClick={handleRoute2}> /bounties </div>
      <div onClick={handleRoute3}> /bounties/fsafsafsa </div>
    </main>
  )
}
