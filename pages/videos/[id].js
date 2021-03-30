import Head from 'next/head'
import styles from '../../styles/Home.module.css'

import Navbar from '../../components/navbar'
import PreviewCard from '../../components/vid-card'
import ReactPlayer from 'react-player'
import { useRouter } from "next/router";

// example api call response
const data = {
  url: "https://www.youtube.com/watch?v=YbJOTdZBX1g",
  title: "video title example",
  description: "video description example",
  views: 200
}

function View({data}) {
  const router = useRouter();
  const { id } = router.query; // Destructuring our router object
  // api call using id for video details
    
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
              url={data.url}
              width='100%'
              height='100%'
              className="react-player"
            />
          </div>
          <div className="video-info">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <small>{data.views} views</small>
          </div>
          
        
        <div className="video-string-v rounded d-flex flex-wrap justify-content-around right-list">
          {/* api list */}
        </div>
        
        
      </div>
    </div>
  )
}
  
// get props
export async function getServerSideProps(context) {
  const res = await fetch('api/url');
  const data = await res.json()
  if (!data) {
    return (
      console.log("no data")
    )
  }
  return {
    props: { data }
  };

};

export default View