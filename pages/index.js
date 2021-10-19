import React , {useEffect} from "react"
import Head from 'next/head'
import Image from 'next/image'
import LeftView from '../components/LeftView'
import RightView from '../components/RightView'
import SideBar from '../components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { SET_SEARCH } from '../redux/actions/types'


export default function Home() {

  const { showSearch } = useSelector(state => state.search)
  const dispatch = useDispatch()
  console.log(showSearch);

  useEffect(() => {
    dispatch({ type: SET_SEARCH })
  }, [])

  return (
    <div >
      <Head>
        <title>Mayweather</title>
        <meta name="description" content="Weather display App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative ml-0 md:ml-72 lg:ml-80">

        {/* left slider search box */}
        { showSearch && <SideBar />}

        {/* left bar on homepgae */}
        <div className="relative md:fixed top-0 left-0 md:w-72 lg:w-80 h-auto md:h-screen bg-bggray z-10">
          <LeftView />
        </div>

        {/* right main homepage section */}
        <div className="">
          <RightView />
        </div>
      </div>
      
    </div>
  )
}
