import React from 'react'
import { Row, Col } from 'antd';
import Link from "next/link"

const BrowseLayouts = () => {
    return (
        <div className="bg-white w-full p-4">
            <Row gutter={12}>
                <Col xs={24} md={12} lg={6} style={{ marginBottom: "0.7rem" }}>
                    <Link href="/dashboard/manage/layout">
                        <a className="bg-mainbg px-3 pt-3 flex items-center justify-center">
                            <img className="" src="/images/layout1.png" alt="layout thumbnail" />
                        </a>
                    </Link>
                </Col>
                <Col xs={24} md={12} lg={6} style={{ marginBottom: "0.7rem" }}>
                    <Link href="/dashboard/manage/layout">
                        <a className="bg-mainbg px-3 pt-3 flex items-center justify-center">
                            <img className="" src="/images/layout2.png" alt="layout thumbnail" />
                        </a>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default BrowseLayouts
