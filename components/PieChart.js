import { Row, Col, DatePicker } from 'antd';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {

    const options = {
        colors:['#6B002C', "#b14e77"],
        labels : ['new', 'returning', ]
    };
    const series = [80, 20];
    

    return (
        <div className="bg-white p-4">
            <Row style={{ marginBottom: "0.7rem" }}>
                <Col>
                    <h1 className="text-sm font-bold">NEW vs. RETURNING VISITORS</h1>
                </Col>
            </Row>

            <div className="h-80">
                <Chart
                    options={options}
                    series={series}
                    type="donut"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}

export default PieChart
