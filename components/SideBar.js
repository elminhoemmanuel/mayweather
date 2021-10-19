import React from 'react'
import RoundBtn from './RoundBtn'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_SEARCH } from "../redux/actions/types"

const SideBar = () => {

    const dispatch = useDispatch()

    return (
        <div className="slide-in-left fixed top-0 left-0 z-40 bg-bggray pt-6 pb-8 px-6 h-screen 
        w-screen md:w-72 lg:w-80 text-maytext">
            <div className="flex justify-end">
                <RoundBtn
                    btnText={<AiOutlineClose className="h-5 w-5 text-maytext" />}
                    addStyle="h-10 w-10 bg-bggray "
                    clicked={() => {dispatch({type:TOGGLE_SEARCH})}}
                />
            </div>
        </div>
    )
}

export default SideBar
