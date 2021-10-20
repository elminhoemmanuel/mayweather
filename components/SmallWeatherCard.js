import React from 'react'
import moment from "moment"
import { useDispatch, useSelector } from 'react-redux'

const SmallWeatherCard = ({ item, count }) => {

    const { unit } = useSelector((state) => state.fetch);
    const celToFah = celsius => celsius * 9/5 + 32;
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

    return (
        <div className="shadow-md bg-bggray text-maytext h-42 p-5 flex items-center justify-center flex-col">
            { count === 1 ? <p className="text-sm">Tommorrow</p> : 
                <p className="text-sm">
                    {moment(item.applicable_date).format("ddd, D MMM")}
                </p>
            }

            <div className="py-6 flex items-center justify-center">
                <div><img className="h-12 w-12" src={getCorrectImg(item.weather_state_abbr)} alt="weather image" /></div>
            </div>

            <div className="flex items-center justify-between">
                { unit === "cel" && <p className="text-sm">{Math.round(item.max_temp)}°C&nbsp;&nbsp;&nbsp;&nbsp;</p> }
                { unit === "fah" && <p className="text-sm">{Math.round(celToFah(item.max_temp))}°F&nbsp;&nbsp;&nbsp;&nbsp;</p> }

                { unit === "cel" && <p className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;{Math.round(item.min_temp)}°C</p>}
                { unit === "fah" && <p className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;{Math.round(celToFah(item.min_temp))}°F</p>}
            </div>

        </div>
    )
}

export default SmallWeatherCard
