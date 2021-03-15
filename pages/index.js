import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

import Navbar from '../components/navbar'
import PreviewCard from '../components/vid-card'

// call to api
// example api repsonse
const videoList = [
  {
    title:"test",
    text: "Lorem ipsum blah de blah balh meh",
    views: 150,
    url:12,
    img: ""
  },
  {
    title:"test2",
    text: "Lorem ipsum blah de blah balh meh",
    views: 151,
    url:13,
    img: ""
  },
  {
    title:"test3",
    text: "Lorem ipsum blah de blah balh meh",
    views: 10,
    url:14,
    img: ""
  }
]

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Navbar />
      
      <Head>
        <title>Video site</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Video Site" />
        <meta property="og:description" content="A skeleton video streaming site" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="home" />
        <meta property="og:locale" content="en_GB" />
        <meta name="description" content="A skeleton video streaming site" />
        <meta name="author" content="Ben Williams" />
      </Head>

      <div className="page-body">
        <h2 className="text-center">Videos</h2>

        <div className="video-string-h rounded d-flex flex-wrap justify-content-around">
          {videoList.map((item, index) => (
            <PreviewCard video={item} key={index}/>
          ))}
        </div>
        
      </div>
    </div>
  )
}
