import React from "react";
import { bestsellers } from "./DashData"
import { AiTwotoneStar } from "react-icons/ai"
import { Button } from 'antd';

const LatestOrders = () => {

    return (
        <div className="bg-white px-4 pt-4 pb-7 ">
            <h1 className="text-sm font-bold mb-3">BESTSELLERS</h1>

            <div className="divide-y divide-gray-200 ">
                {
                    bestsellers.map(item => (
                        <div key={item.id} className="flex justify-between py-2">
                            <div className="flex">
                                <div className="mr-2">
                                    <img className="" src="/images/thumb.png" alt="thumbnail" />
                                </div>
                                <div>
                                    <p className="text-sm">{item.name}<br/><AiTwotoneStar className="inline h-4 w-4 text-yellow-400" /> 4.0</p>
                                    {/* <p></p> */}
                                </div>
                            </div>

                            <div>
                                <p className="text-sm">{item.qty}</p>
                            </div>
                        </div>
                    ))
                }
            </div> 

            <div className="my-3">
                <Button className="report-btn">VIEW BESTSELLERS REPORT</Button>
            </div>
        </div>
    )
}

export default LatestOrders
