import React from "react";
import { countries } from "./DashData"
import { AiTwotoneStar } from "react-icons/ai"
import { Button } from 'antd';

const UserCountries = () => {

    return (
        <div className="bg-white px-4 pt-4 pb-52">
            <h1 className="text-sm font-bold mb-3">TOP COUNTRIES</h1>

            <div className="divide-y divide-gray-200 ">
                {
                    countries.map((item, i) => (
                        <div key={item.id} className="flex justify-between py-2">
                            <div className="">
                                <p className="text-sm">{i + 1}. &nbsp; {item.name}<br /></p>
                            </div>

                            <div>
                                <p className="text-sm">{item.rating}</p>
                            </div>
                        </div>
                    ))
                }
            </div> 

            <div className="my-3">
                <Button className="report-btn">VIEW COUNTRIES REPORT</Button>
            </div>
        </div>
    )
}

export default UserCountries
