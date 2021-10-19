import React from 'react'
import RoundBtn from './RoundBtn'
import { fivedays } from './Data'
import SmallWeatherCard from './SmallWeatherCard'
import ProgressBar from './ProgressBar'
import { BsFillPlayFill } from "react-icons/bs"
import Link from "next/link"
import NextNprogress from 'nextjs-progressbar';

const RightView = () => {
    return (
        <div className="px-6 md:px-12 lg:px-24 pt-6 pb-8 text-maytext">
            <div className="flex justify-end items-center mb-6">
                <RoundBtn
                    btnText={<span className="h-5 w-5">°C</span>}
                    addStyle="h-10 w-10 mr-2 text-black hover:text-white bg-gray-300 hover:bg-gray-600"
                    clicked={() => { }}
                />

                <RoundBtn
                    btnText={<span className="h-5 w-5">°F</span>}
                    addStyle="h-10 w-10 bg-bgbtn hover:bg-gray-600 text-maytext"
                    clicked={() => { }}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {
                    fivedays.map(item => (
                        <SmallWeatherCard item={item} key={item.id} />
                    ))
                }
            </div>

            <div className="">
                <p className="text-lg md:text-xl mb-4">Today's Highlights</p>

                <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mb-16">

                    {/* wind */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Wind status</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">7</span>
                            <span className="text-2xl text-maytext">mph</span>
                        </h1>

                        <div className="flex items-center">
                            <RoundBtn
                                btnText={<BsFillPlayFill className="h-4 w-4" />}
                                addStyle="mr-2 pointer:events-none h-7 w-7 bg-bgbtn hover:bg-gray-600 text-maytext"
                                clicked={() => { }}
                            />
                            <p className="text-xs">WSW</p>
                        </div>
                    </div>

                    {/* humidity */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Humidity</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">84</span>
                            <span className="text-2xl text-maytext">%</span>
                        </h1>

                        <div className="">
                            <div className="relative w-full p-2">
                                <span className="absolute top-0 left-0 text-xs">0</span>
                                <span className="absolute top-0 left-1/2 text-xs">50</span>
                                <span className="absolute top-0 right-0 text-xs">100</span>
                            </div>
                            <ProgressBar bgcolor="#FFEC65" completed={84} />
                            
                            <div className="relative w-full p-2">
                                <span className="absolute top-0 right-0 text-xs">%</span>
                            </div>
                        </div>
                    </div>

                    {/* visibility */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Visibility</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">6,4</span>
                            <span className="text-2xl text-maytext">miles</span>
                        </h1>
                    </div>

                    {/* air pressure */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Air Pressure</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">998</span>
                            <span className="text-2xl text-maytext">mb</span>
                        </h1>
                    </div>
                </div>

                <p className="text-sm text-center">Coded by <Link href="https://github.com/elminhoemmanuel"><a className="font-bold">elminhoemmanuel</a></Link></p>
            </div>

        </div>
    )
}

export default RightView
