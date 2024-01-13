import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/sections/Hero/Hero'
import Contacts from '@/sections/Contacts/Contacts'
import About from '@/sections/About/About'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Contacts />
    </div>
  )
}
