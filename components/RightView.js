import React, { useEffect } from "react"
import RoundBtn from './RoundBtn'
import SmallWeatherCard from './SmallWeatherCard'
import ProgressBar from './ProgressBar'
import { BsFillPlayFill } from "react-icons/bs"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import { SET_UNIT } from "../redux/actions/types"


const RightView = () => {

    const dispatch = useDispatch()
    const { details, unit } = useSelector((state) => state.fetch);
    const weathers = details.consolidated_weather

    return (
        <div className="px-6 md:px-12 lg:px-24 pt-6 pb-8 text-maytext">
            <div className="flex justify-end items-center mb-6">
                {
                    unit === "cel" ?
                        <RoundBtn
                            btnText={<span className="h-5 w-5">°C</span>}
                            addStyle="mr-2 h-10 w-10 bg-gray-400 hover:bg-gray-400 hover:text-white text-white"
                            clicked={() => { dispatch({ type: SET_UNIT, payload: "cel" }) }}
                        /> :
                        <RoundBtn
                            btnText={<span className="h-5 w-5">°C</span>}
                            addStyle="mr-2 h-10 w-10 bg-gray-600 hover:bg-gray-400 hover:text-white text-maytext"
                            clicked={() => { dispatch({ type: SET_UNIT, payload: "cel" }) }}
                        />
                }

                {
                    unit === "fah" ?
                        <RoundBtn
                            btnText={<span className="h-5 w-5">°F</span>}
                            addStyle="h-10 w-10 bg-gray-400 hover:bg-gray-400 hover:text-white text-white"
                            clicked={() => { dispatch({ type: SET_UNIT, payload: "fah" }) }}
                        /> :
                        <RoundBtn
                            btnText={<span className="h-5 w-5">°F</span>}
                            addStyle="h-10 w-10 bg-gray-600 hover:bg-gray-400 hover:text-white text-maytext"
                            clicked={() => { dispatch({ type: SET_UNIT, payload: "fah" }) }}
                        />
                }
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                {
                    weathers.filter((item, i) => i > 0).map((item, j) => (
                        <SmallWeatherCard item={item} key={item.id} count={j + 1} />
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
                            <span className="font-bold text-4xl text-maytext">{Math.round(weathers[0].wind_speed)}</span>
                            <span className="text-2xl text-maytext"> mph</span>
                        </h1>

                        <div className="flex items-center">
                            <RoundBtn
                                btnText={<BsFillPlayFill className="h-4 w-4" />}
                                addStyle="mr-2 pointer:events-none h-7 w-7 bg-bgbtn hover:bg-gray-600 text-maytext"
                                clicked={() => { }}
                            />
                            <p className="text-xs">{weathers[0].wind_direction_compass}</p>
                        </div>
                    </div>

                    {/* humidity */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Humidity</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">{weathers[0].humidity}</span>
                            <span className="text-2xl text-maytext"> %</span>
                        </h1>

                        <div className="">
                            <div className="relative w-full p-2">
                                <span className="absolute top-0 left-0 text-xs">0</span>
                                <span className="absolute top-0 left-1/2 text-xs">50</span>
                                <span className="absolute top-0 right-0 text-xs">100</span>
                            </div>
                            <ProgressBar bgcolor="#FFEC65" completed={weathers[0].humidity} />

                            <div className="relative w-full p-2">
                                <span className="absolute top-0 right-0 text-xs">%</span>
                            </div>
                        </div>
                    </div>

                    {/* visibility */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Visibility</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">{Math.round(weathers[0].visibility)}</span>
                            <span className="text-2xl text-maytext"> miles</span>
                        </h1>
                    </div>

                    {/* air pressure */}
                    <div className="shadow-md bg-bggray text-maytext flex items-center justify-center flex-col p-6">
                        <p className="text-sm">Air Pressure</p>

                        <h1 className="py-5">
                            <span className="font-bold text-4xl text-maytext">{Math.round(weathers[0].visibility)}</span>
                            <span className="text-2xl text-maytext"> mb</span>
                        </h1>
                    </div>
                </div>

                <p className="text-sm text-center">Coded by <Link href="https://github.com/elminhoemmanuel"><a target="_blank" className="font-bold">elminhoemmanuel</a></Link></p>
            </div>

        </div>
    )
}

export default RightView
