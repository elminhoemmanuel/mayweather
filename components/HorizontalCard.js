import React from 'react'
import { AiTwotoneStar } from "react-icons/ai"

export const HorizontalCard = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row mb-4 pt-4">
                <div className="pic-box mb-5 md:mb-0">
                    <img className="w-full h-60 md:h-full" src="/images/leanguy.png" alt="model image" />
                </div>

                <div className="text-box pl-0 md:pl-2">
                    <div className="flex justify-between mb-3">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-52 w-full">
                                <p className="font-bold">Layered black and grey <br />hi-low flared maxi shirt</p>
                            </div>
                            <div className="md:pl-3 pl-0">
                                <p><AiTwotoneStar className="inline h-4 w-4 text-yellow-400" /> 43 <br /><span className="text-gray-400">Verified Purchaser</span></p>
                            </div>
                        </div>

                        <div>
                            <p>3 days ago</p>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-80">
                                <p ><span className="text-gray-400 mb-3">Product code: 01292039</span> <br /><span className="font-bold">N20,000</span></p>
                            </div>

                            <div className="pl-0 md:pl-1 pr-2 md:pr-0">
                                <p className="font-bold">EXCELLENT AND CONVENIENT</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit tellus pellentesque bibendum massa vestibulum vel. Sagittis et cras hendrerit tempor a non phasellus. Et dolor nunc, ipsum at </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex flex-col md:flex-row mb-4 pt-4">
                <div className="pic-box mb-5 md:mb-0">
                    <img className="w-full h-60 md:h-full" src="/images/leanguy.png" alt="model image" />
                </div>

                <div className="text-box pl-0 md:pl-2">
                    <div className="flex justify-between mb-3">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-52 w-full">
                                <p className="font-bold">Layered black and grey <br />hi-low flared maxi shirt</p>
                            </div>
                            <div className="md:pl-3 pl-0">
                                <p><AiTwotoneStar className="inline h-4 w-4 text-yellow-400" /> 43 <br /><span className="text-gray-400">Verified Purchaser</span></p>
                            </div>
                        </div>

                        <div>
                            <p>3 days ago</p>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-80">
                                <p ><span className="text-gray-400 mb-3">Product code: 01292039</span> <br /><span className="font-bold">N20,000</span></p>
                            </div>

                            <div className="pl-0 md:pl-1 pr-2 md:pr-0">
                                <p className="font-bold">EXCELLENT AND CONVENIENT</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit tellus pellentesque bibendum massa vestibulum vel. Sagittis et cras hendrerit tempor a non phasellus. Et dolor nunc, ipsum at </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
