import React from "react";
import Head from 'next/head'
import NestedLayout from "../../../../components/Layout"
import { Tabs } from 'antd';
import BrowseLayouts from "../../../../components/BrowseLayouts";
import YourLayout from "../../../../components/YourLayout";

const { TabPane } = Tabs;

export default function Home() {
    return (
        <div >
            <Head>
                <title>Aneeque marketplace | Dashboard</title>
                <meta name="description" content="Aneeque marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full'>
                <h1 className="text-sm font-bold mb-4">Layout</h1>

                <div>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="Browse layouts" key="1">
                            <BrowseLayouts />
                        </TabPane>
                        <TabPane tab="Your layout" key="2">
                            <YourLayout />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}


Home.getLayout = function getLayout(page) {
    return (
        <NestedLayout>{page}</NestedLayout>
    )
}