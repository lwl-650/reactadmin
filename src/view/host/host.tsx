import * as React from "react";
import "./host.scss";
import { Card, Col, Row, Tag } from "antd";
import { getCpu } from "@/http/api";
import { getNum, getGhz, getMemory, getDisk } from "@/util/common";

interface HostProps {}

const host: React.FC<HostProps> = (): React.ReactElement => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [ifloading, setIfloading] = React.useState(true);
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
        vendorId: "",
        cores: "",
      },
    ],
    memory: {
      total: "",
      used: "",
    },
    diskHard: 0,
    diskTotal: 0,
    diskUsed: 0,
    disk: [],
    go:{
demoPath:"",
goPath:"",
version:""
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
      setIfloading(false);
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
              loading={ifloading}
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
              loading={ifloading}
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
                <div>cpu核心：</div>
                {data.cpu[0].cores}
              </div>
              <div className="titleDiv">
                <div>使用率：</div>
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
              loading={ifloading}
            >
              <div className="titleDiv">
                <div>内存总量：</div>
                {/* {data.memory.total} */}
                {getMemory(data.memory.total)}
              </div>
              <div className="titleDiv">
                <div>已使用：</div>
                {/* {data.memory.used} */}
                {getMemory(data.memory.used)}
              </div>
              <div className="titleDiv">
                <div>使用率：</div>
                <Tag color="#f50">{getNum(data.GetMemPercent)}%</Tag>
                <Tag color="#2db7f5">{getNum(data.GetMemPercent)}%</Tag>
                <Tag color="#87d068">{getNum(data.GetMemPercent)}%</Tag>
                <Tag color="#108ee9">{getNum(data.GetMemPercent)}%</Tag>
              </div>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="硬盘"
              bordered={true}
              type="inner"
              hoverable={true}
              loading={ifloading}
            >
              <div className="titleDiv">
                <div>硬盘总量：</div>
                {getDisk(data.diskTotal)}
              </div>
              <div className="titleDiv">
                <div>已使用：</div>
                {getDisk(data.diskUsed)}
              </div>

              {data.disk.map((item: any) => {
                return (
                  <div className="titleDiv" key={item.path}>
                    <div>{item.path}盘&nbsp;&nbsp;</div> {getDisk(item.total)}
                    &nbsp;&nbsp;
                    <div className="disk">已:</div> {getDisk(item.used)}
                    &nbsp;&nbsp;
                    <div className="disk">未:</div> {getDisk(item.free)}
                    &nbsp;&nbsp;
                    <div className="disk">比例:</div>&nbsp;
                    <Tag className="tag" color="#87d068">{getNum(item.used / item.total)}%</Tag>
                  </div>
                );
              })}
              <div className="titleDiv">
                <div>硬盘使用率：</div>
                <Tag color="#f50">
                  {getNum(data.diskUsed / data.diskTotal)}%
                </Tag>
                <Tag color="#2db7f5">
                  {getNum(data.diskUsed / data.diskTotal)}%
                </Tag>
                <Tag color="#87d068">
                  {getNum(data.diskUsed / data.diskTotal)}%
                </Tag>
                <Tag color="#108ee9">
                  {getNum(data.diskUsed / data.diskTotal)}%
                </Tag>
              </div>
            </Card>
          </Col>


          <Col span={8}>
            <Card
              title="项目"
              bordered={true}
              type="inner"
              hoverable={true}
              loading={ifloading}
            >
              <div className="titleDiv">
                <div>项目路径：</div>
                {data.go.demoPath}
              </div>
              <div className="titleDiv">
                <div>GOPATH：</div>
                {data.go.goPath}
              </div>
              <div className="titleDiv">
                <div>Version：</div>
                {data.go.version}
              </div>
              
            </Card>
          </Col>

          
        </Row>
      </div>
    </div>
  );
};

export default host;
