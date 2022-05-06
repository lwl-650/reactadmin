import * as React from "react";
import "./host.scss";
import { Card, Col, Row, Tag } from "antd";
import { getCpu } from "@/http/api";
import { getNum, getGhz } from "@/util/common";

interface HostProps { }

const host: React.FC<HostProps> = (): React.ReactElement => {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [data, setData] = React.useState({
        GetCpuPercent: "",
        GetDiskPercent: "",
        GetMemPercent: "",
        localMachine: {
            hostname: "",
            kernelArch: "",
            kernelVersion: "",
            os: "",
            platform: "",
        },
        cpu: [
            {
                mhz: "",
                modelName: "",
                vendorId: ''
            }
        ],
        memory:{
            total:"",
            used:""
        }
    });
    React.useEffect(() => {
        // const updateSize = () => setWindowSize({
        //     width: window.innerWidth,
        //     height: window.innerHeight,
        // });
        // window.addEventListener('resize', updateSize);
        // return () => window.removeEventListener('resize', updateSize);
        getCpu().then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);
    console.log(data);
    // console.log(windowSize)
    return (
        <div className="host">
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            title="本机信息"
                            bordered={true}
                            hoverable={true}
                            type="inner"
                        >
                            <div className="titleDiv">
                                <div>计算机名：</div>
                                {data.localMachine.hostname}
                            </div>
                            <div className="titleDiv">
                                <div>系统：</div>
                                {data.localMachine.platform}
                            </div>
                            <div className="titleDiv">
                                <div>系统名称：</div>
                                {data.localMachine.os}
                            </div>
                            <div className="titleDiv">
                                <div>系统类型：</div>
                                {data.localMachine.kernelArch}
                            </div>
                            <div className="titleDiv">
                                <div>系统版本：</div>
                                {data.localMachine.kernelVersion}
                            </div>


                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title="处理器"
                            bordered={true}
                            type="inner"
                            hoverable={true}
                        >
                            <div className="titleDiv">
                                <div>cpu：</div>
                                {data.cpu[0].modelName}
                            </div>
                            <div className="titleDiv">
                                <div>cpu频率：</div>
                                {getGhz(data.cpu[0].mhz)}
                            </div>
                            <div className="titleDiv">
                                <div>cpu使用率：</div>
                                <Tag color="#f50">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#2db7f5">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#87d068">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#108ee9">{getNum(data.GetCpuPercent)}%</Tag>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            title="内存"
                            bordered={true}
                            type="inner"
                            hoverable={true}
                        >
                            <div className="titleDiv">
                                <div>内存总量：</div>
                                {data.memory.total}
                            </div>
                            <div className="titleDiv">
                                <div>已使用：</div>
                                {data.memory.used}
                            </div>
                            <div className="titleDiv">
                                <div>内存使用率：</div>
                                <Tag color="#f50">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#2db7f5">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#87d068">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#108ee9">{getNum(data.GetMemPercent)}%</Tag>
                            </div>
                            <p>{getNum(data.GetDiskPercent)}</p>
                        </Card>
                    </Col>



                    <Col span={8}>
                        <Card
                            title="内存"
                            bordered={true}
                            type="inner"
                            hoverable={true}
                        >
                            <div className="titleDiv">
                                <div>内存总量：</div>
                                {data.memory.total}
                            </div>
                            <div className="titleDiv">
                                <div>已使用：</div>
                                {data.memory.used}
                            </div>
                            <div className="titleDiv">
                                <div>内存使用率：</div>
                                <Tag color="#f50">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#2db7f5">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#87d068">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#108ee9">{getNum(data.GetMemPercent)}%</Tag>
                            </div>
                            <p>{getNum(data.GetDiskPercent)}</p>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card
                            title="内存"
                            bordered={true}
                            type="inner"
                            hoverable={true}
                        >
                            <div className="titleDiv">
                                <div>内存总量：</div>
                                {data.memory.total}
                            </div>
                            <div className="titleDiv">
                                <div>已使用：</div>
                                {data.memory.used}
                            </div>
                            <div className="titleDiv">
                                <div>内存使用率：</div>
                                <Tag color="#f50">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#2db7f5">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#87d068">{getNum(data.GetMemPercent)}%</Tag>
                                <Tag color="#108ee9">{getNum(data.GetMemPercent)}%</Tag>
                            </div>
                            <p>{getNum(data.GetDiskPercent)}</p>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card
                            title="处理器"
                            bordered={true}
                            type="inner"
                            hoverable={true}
                        >
                            <div className="titleDiv">
                                <div>cpu：</div>
                                {data.cpu[0].modelName}
                            </div>
                            <div className="titleDiv">
                                <div>cpu频率：</div>
                                {getGhz(data.cpu[0].mhz)}
                            </div>
                            <div className="titleDiv">
                                <div>cpu使用率：</div>
                                <Tag color="#f50">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#2db7f5">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#87d068">{getNum(data.GetCpuPercent)}%</Tag>
                                <Tag color="#108ee9">{getNum(data.GetCpuPercent)}%</Tag>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default host;
