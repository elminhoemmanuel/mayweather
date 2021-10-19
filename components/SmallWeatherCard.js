import React from 'react'

const SmallWeatherCard = ({ item }) => {
    return (
        <div className="shadow-md bg-bggray text-maytext h-42 p-5 flex items-center justify-center flex-col">
            <p className="text-sm">{item.day}</p>

            <div className="py-6 flex items-center justify-center">
                <div><img className="h-12 w-12" src={item.pic} alt="weather image" /></div>
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm">{item.max}°C&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="text-sm">&nbsp;&nbsp;&nbsp;&nbsp;{item.min}°C</p>
            </div>

        </div>
    )
}

export default SmallWeatherCard
