import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'

export default function Contact() {
  return ( 
    <div className='style.container'>
       <Head>
         <title>Create Next App</title>
         {/* <link rel='icon' href='/favorite.ico' /> */}
       </Head>
       <Navbar/>
       <h1>Contact</h1>
    </div>
  )
}
