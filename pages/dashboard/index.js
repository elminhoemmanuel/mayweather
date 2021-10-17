import React from "react";
import Head from 'next/head'
import { Row, Col } from 'antd';
import NestedLayout from "../../components/Layout"
import { insights } from "../../components/DashData"
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { HorizontalCard } from '../../components/HorizontalCard';
import Graph from '../../components/Graph';
import PieChart from '../../components/PieChart';
import LatestOrders from "../../components/LatestOrders";
import UserCountries from "../../components/UserCountries";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Aneeque marketplace | Dashboard</title>
        <meta name="description" content="Aneeque marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full'>

        {/* insights card */}
        <div className='bg-white mb-8'>
          <Row className=''>
            {
              insights.map(item => (
                <Col key={item.id} className='p-3 border border-gray-200' xs={24} sm={24} md={12} lg={6} >
                  <p className='text-xs font-bold' >{item.small}</p>
                  <h1 className='font-bold text-2xl my-3'>{item.large}</h1>
                  <p className='text-green-400 text-xs' ><FiArrowUpRight className='h-5 w-5 inline' />{item.percent}</p>
                  <p></p>
                </Col>
              ))
            }
          </Row>
        </div>

        <div className="bg-white mb-8 p-5 w-full">
          <Row justify="space-between" align="middle" style={{ marginBottom: "0.7rem" }}>
            <Col>
              <h1 className="text-sm font-bold">LATEST REVIEWS</h1>
            </Col>
            <Col>
              <Link href="/dashboard">
                <a className="flex items-center text-xs">
                  <div>
                    <h1 className="text-xs font-bold pt-2 mr-1">VIEW ALL</h1>
                  </div>
                  <div className=""><FiArrowRight className="text-black h-5 w-5" /></div>
                </a>
              </Link>
            </Col>
          </Row>

          <div className="divide-y divide-gray-200 w-full overflow-x-hidden">
            <HorizontalCard />
          </div>
        </div>

        <div className="mb-8">
          <Row gutter={16}>
            <Col xs={24} md={12} lg={14} style={{marginBottom: "0.7rem" }}>
              <Graph />
            </Col>
            <Col xs={24} md={12} lg={10}>
              <PieChart />
            </Col>
          </Row>
        </div>

        <div className="mb-8">
          <Row gutter={16}>
            <Col xs={24} md={12} lg={12} style={{marginBottom: "0.7rem" }}>
              <LatestOrders />
            </Col>
            <Col xs={24} md={12} lg={12}>
              <UserCountries />
            </Col>
          </Row>
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