import { Row, Col, DatePicker } from 'antd';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Graph = () => {

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        colors:['#6B002C']
    }

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className="bg-white p-4">
            <Row justify="space-between" align="middle" style={{ marginBottom: "0.7rem" }}>
                <Col>
                    <h1 className="text-sm font-bold">SALES</h1>
                </Col>
                <Col>
                    <DatePicker placeholder="OCT-NOV 2019" onChange={onChange} />
                </Col>
            </Row>

            <div className="h-80">
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default Graph
