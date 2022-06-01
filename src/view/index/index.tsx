import {
  useState,
  useEffect,
  FC,
  ReactElement,
  MouseEventHandler,
} from "react";

import "./index.scss";
import { findId, findAll, delById, addUser } from "../../http/api";
import {
  Input
} from "antd";
import * as echarts from 'echarts';

interface IndexProps {
  // onClick ?:event: MouseEvent<HTMLDivElement>||undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

}


const Index: FC<IndexProps> = ({ onClick, children }): ReactElement => {


  const [list, setList] = useState([1, 2, 34, 5, 6])

  useEffect(() => {
    var myChart = echarts.init(document.getElementById('main') as HTMLElement);
    // 绘制图表
    myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

  }, []);

  function fn(e: any): void {
    console.log(e)
    console.log(e.target.getAttribute('data-id'))
  }



  return (
    <div className="all" onClick={fn}>
      <div id="main"></div>

    </div>
  )
};

export default Index;
