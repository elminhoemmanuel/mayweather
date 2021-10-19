import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import { IoMdLocate } from "react-icons/io"
import RoundBtn from './RoundBtn'

const LeftView = () => {
    return (
        <div className="w-full h-full pt-6 pb-8 px-6 weatherbox relative">
            <div className="absolute top-20">
                <img className="cloudimg" src="/images/Cloud-background.png" alt="cloud background" />
            </div>

            <div className="flex items-center justify-between mb-4">
                <PrimaryBtn
                    btnText="Search for places"
                    addStyle="bg-bgbtn text-maytext hover:bg-gray-600"
                    clicked={() => { }}
                />

                <RoundBtn
                    btnText={<IoMdLocate className="h-5 w-5 " />}
                    addStyle="h-10 w-10 text-maytext bg-bgbtn hover:bg-gray-600"
                    clicked={() => { }}
                />
            </div>

            <div className="flex items-center justify-center flex-col ">
                <div className="py-10">
                    <img className="block h-38 w-38" src="/images/Shower.png" alt="main weather image" />
                </div>

                <h1 className="pb-6">
                    <span className="font-bold text-6xl text-maytext">15</span>
                    <span className="text-3xl text-maytext">°C</span>
                </h1>

                <h1 className="pb-6">
                    <span className="font-bold text-2xl text-textleft">Shower</span>
                </h1>

                <p className="text-textleft text-sm pb-4">Today - Fri, 5 Jun</p>
                <p className="text-textleft text-sm">Helsinki</p>

            </div>
        </div>
    )
}

export default LeftView
