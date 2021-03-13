import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import PreviewCard from '../components/vid-card'

export default function Home() {
  
  // function to fill the first 20 preview spots with the latest videos


  return (
    <div className={styles.container}>
      <Navbar />
      
      <Head>
        <title>Video site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-body">
        <h2 className="text-center">Hello</h2>
        
        
      </div>
    </div>
  )
}
