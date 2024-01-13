import Image from 'next/image'
import styles from './page.module.scss'
import Hero from '@/sections/Hero/Hero'
import Contacts from '@/sections/Contacts/Contacts'
import About from '@/sections/About/About'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Contacts />
    </div>
  )
}
