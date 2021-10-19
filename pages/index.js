import Head from 'next/head'
import Image from 'next/image'
import LeftView from '../components/LeftView'
import RightView from '../components/RightView'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Mayweather</title>
        <meta name="description" content="Weather display App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative ml-0 md:ml-72 lg:ml-80">
        <div className="relative md:fixed top-0 left-0 md:w-72 lg:w-80 h-auto md:h-screen bg-bggray">
          <LeftView />
        </div>

        <div className="">
          <RightView />
        </div>
      </div>
      
    </div>
  )
}
