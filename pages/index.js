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
        <h2 className="text-center">Videos</h2>
        <div className="video-string-h rounded d-flex flex-wrap justify-content-around">
          <PreviewCard img="https://resumeimages.s3.eu-west-2.amazonaws.com/blogs/20210302-qv0oy-img-0654-png" title="Video 1" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="50"/>
          <PreviewCard title="Video 2" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="123"/>
          <PreviewCard title="Video 3" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="2312"/>
          <PreviewCard title="Video 4" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="12"/>
          <PreviewCard title="Video 5" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="567"/>
          <PreviewCard title="Video 6" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="38"/>
          <PreviewCard title="Video 7" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="797"/>
          <PreviewCard title="Video 8" text="Lorem ipsum kjbaslkdfnlaksbflksb" views="63"/>
        </div>
        
        
      </div>
    </div>
  )
}
