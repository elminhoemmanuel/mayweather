import React, {useState} from 'react'
import RoundBtn from './RoundBtn'
import { AiOutlineClose, AiOutlineSearch, AiOutlineRight } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_SEARCH } from "../redux/actions/types"
import PrimaryBtn from './PrimaryBtn'

const SideBar = () => {

    const dispatch = useDispatch()
    const [showIcon, setShowIcon] = useState({
        first:false,
        second:false,
        third:false,
    })

    return (
        <div className="slide-in-left fixed top-0 left-0 z-40 bg-bggray pt-6 pb-8 px-6 h-screen 
        w-screen md:w-72 lg:w-80 text-maytext">
            <div className="flex justify-end mb-5">
                <RoundBtn
                    btnText={<AiOutlineClose className="h-5 w-5 text-maytext" />}
                    addStyle="h-10 w-10 bg-bggray "
                    clicked={() => { dispatch({ type: TOGGLE_SEARCH }) }}
                />
            </div>

            <div className="grid grid-cols-6 gap-2 mb-10">
                <div className="relative col-span-4">
                    <input
                        type="text"
                        placeholder="search location"
                        className="w-full pl-8 py-2 pr-2 bg-transparent text-inputtext placeholder-inputtext border border-gray-500 focus:outline-none text-sm"
                    />
                    <AiOutlineSearch className="text-inputtext h-5 w-5 absolute searchbtn" />
                </div>

                <div className="col-span-2">
                    <PrimaryBtn
                        btnText="Search"
                        addStyle="w-full bg-btnblue text-white border border-btnblue hover:border-blue-800 hover:bg-blue-800"
                        clicked={() => {  }}
                    />
                </div>
            </div>

            <div>
                <button onMouseOver={() =>{setShowIcon({ ...showIcon, first:!showIcon.first })}} 
                onMouseOut={() =>{setShowIcon({ ...showIcon, first:!showIcon.first })}}
                className="focus:outline-none text-sm bg-transparent p-3 flex mb-4
                 items-center justify-between w-full text-maytext border border-transparent
                  hover:border-gray-500">
                    <p>London</p>
                    { showIcon.first && <AiOutlineRight className="h-4 w-4" />}
                </button>

                <button onMouseOver={() =>{setShowIcon({ ...showIcon, second:!showIcon.second })}} 
                onMouseOut={() =>{setShowIcon({ ...showIcon, second:!showIcon.second })}}
                className="focus:outline-none text-sm bg-transparent p-3 flex mb-4
                 items-center justify-between w-full text-maytext border border-transparent
                  hover:border-gray-500">
                    <p>Barcelona</p>
                    { showIcon.second && <AiOutlineRight className="h-4 w-4" />}
                </button>

                <button onMouseOver={() =>{setShowIcon({ ...showIcon, third:!showIcon.third })}} 
                onMouseOut={() =>{setShowIcon({ ...showIcon, third:!showIcon.third })}}
                className="focus:outline-none text-sm bg-transparent p-3 flex mb-4
                 items-center justify-between w-full text-maytext border border-transparent
                  hover:border-gray-500">
                    <p>Long Beach</p>
                    { showIcon.third && <AiOutlineRight className="h-4 w-4" />}
                </button>

                
            </div>

        </div>
    )
}

export default SideBar
