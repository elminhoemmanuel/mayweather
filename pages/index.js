import React, { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import LeftView from '../components/LeftView'
import RightView from '../components/RightView'
import SideBar from '../components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { SET_SEARCH, RESET_DETAILS, SET_UNIT } from '../redux/actions/types'
import { fetchDefault } from '../redux/actions/fetch'


export default function Home() {

  const { showSearch } = useSelector(state => state.search)
  const { details, error, loading } = useSelector((state) => state.fetch);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: RESET_DETAILS })
    dispatch({ type: SET_SEARCH })
    dispatch({ type: SET_UNIT, payload:"cel" })
    dispatch(fetchDefault());
  }, [])

  return (
    <div >
      <Head>
        <title>Mayweather</title>
        <meta name="description" content="Weather display App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={error === "" ? "relative ml-0 md:ml-72 lg:ml-80" : "ml-0 relative"}>

        {/* For when data is fetched successfully */}
        <div>
          {
            loading ?
              <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center'>
                <div className='spinner-page'></div>
              </div> :

              <div>
                {
                  error === "" ?

                    <div>
                        {/* left slider search box */}
                        {showSearch && <SideBar />}

                        {/* left bar on homepgae */}
                        <div className="relative md:fixed top-0 left-0 md:w-72 lg:w-80 h-auto md:h-screen bg-bggray z-10">
                          <LeftView />
                        </div>

                        {/* right main homepage section */}
                        <div className="">
                          <RightView />
                        </div>
                    </div> :

                    <div className="flex items-center justify-center py-24 px-6">
                      <p className="text-maytext">{error}</p>
                    </div>
                }
              </div>
          }
        </div>

        {/* for when there is an error and data is not fetched */}
        {/* <div className="flex items-center justify-center py-24">
          {
            error !== '' && <p className="text-maytext"></p>
          }
        </div> */}


      </div>

    </div>
  )
}
