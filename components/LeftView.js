import React, { useState, useEffect } from 'react'
import PrimaryBtn from './PrimaryBtn'
import { IoMdLocate } from "react-icons/io"
import { MdLocationPin } from "react-icons/md"
import RoundBtn from './RoundBtn'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_SEARCH } from "../redux/actions/types"
import moment from "moment"

const LeftView = () => {

    const dispatch = useDispatch()
    const { details, error, loading, unit } = useSelector((state) => state.fetch);
    const weathers = details.consolidated_weather
    const celToFah = celsius => celsius * 9 / 5 + 32;
    const getCorrectImg = (symbol) => {
        switch (symbol) {
            case "s":
                return "/images/Shower.png"

            case "c":
                return "/images/Clear.png"

            case "lc":
                return "/images/LightCloud.png"

            case "hc":
                return "/images/HeavyCloud.png"

            case "lr":
                return "/images/LightRain.png"

            case "hr":
                return "/images/HeavyRain.png"

            case "t":
                return "/images/Thunderstorm.png"

            case "h":
                return "/images/Hail.png"

            case "sl":
                return "/images/Sleet.png"

            case "sn":
                return "/images/Snow.png"

            default:
                break;
        }
    }

    // useEffect(() => {
    //     setWeathers(details.consolidated_weather);
    // }, [weathers])

    return (
        <div className="w-full h-full pt-6 pb-8 px-6 weatherbox relative">
            <div className="absolute top-20">
                <img className="cloudimg" src="/images/Cloud-background.png" alt="cloud background" />
            </div>

            <div className="flex items-center justify-between mb-4">
                <PrimaryBtn
                    btnText="Search for places"
                    addStyle="block bg-bgbtn text-maytext hover:bg-gray-600 px-4 py-2"
                    clicked={() => { dispatch({ type: TOGGLE_SEARCH }) }}
                />

                <RoundBtn
                    btnText={<IoMdLocate className="h-5 w-5 " />}
                    addStyle="h-10 w-10 text-maytext bg-bgbtn hover:bg-gray-600"
                    clicked={() => { }}
                />
            </div>

            <div className="flex items-center justify-center flex-col ">
                <div className="py-10">
                    <img className="block h-38 w-38" src={getCorrectImg(weathers[0].weather_state_abbr)} alt="main weather image" />
                </div>

                {
                    unit === "cel" &&
                    <h1 className="pb-6">
                        <span className="font-bold text-6xl text-maytext">{Math.round(weathers[0].the_temp)}</span>
                        <span className="text-3xl text-maytext">°C</span>
                    </h1>
                }

                {
                    unit === "fah" &&
                    <h1 className="pb-6">
                        <span className="font-bold text-6xl text-maytext">{Math.round(celToFah(weathers[0].the_temp))}</span>
                        <span className="text-3xl text-maytext">°F</span>
                    </h1>
                }

                <h1 className="pb-6">
                    <span className="font-bold text-2xl text-textleft">{weathers[0].weather_state_name}</span>
                </h1>

                <p className="text-textleft text-sm pb-4">Today - {moment(weathers[0].applicable_date).format("ddd, D MMM")}</p>
                <div className="text-textleft text-sm flex items-center"><MdLocationPin className="inline h-5 w-5 mr-1" /> <p className="pt-1">{details.title}</p></div>

            </div>
        </div>
    )
}

export default LeftView
