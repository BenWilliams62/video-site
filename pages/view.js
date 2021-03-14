import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import PreviewCard from '../components/vid-card'
import ReactPlayer from 'react-player'

export default function View() {
  
  // function to fill the first 20 preview spots with relevant videos


  return (
    <div className={styles.container}>
      <Navbar />
      
      <Head>
        <title>Video site - video player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="video-player">
          <div className="video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dn5Tattkj_E"
              width='100%'
              height='100%'
              className="react-player"
            />
          </div>
          <div className="video-info">
            <h3>Title</h3>
            <p>Description</p>
            <small>Views</small>
          </div>
          
        
        <div className="video-string-v rounded d-flex flex-wrap justify-content-around right-list">
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
