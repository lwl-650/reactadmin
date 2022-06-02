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
import store from "@/redux/store"

interface IndexProps {
  // onClick ?:event: MouseEvent<HTMLDivElement>||undefined,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

}


const Index: FC<IndexProps> = ({ onClick, children }): ReactElement => {


  const [list, setList] = useState([1, 2, 34, 5, 6])

  console.log(store.getState())
  useEffect(() => {
    // setInterval(() => {
    //   list[0]++
    //   setList(list)
    //   console.log(list)
    // }, 5000)

    const myChart = echarts.init(document.getElementById('main') as HTMLElement);
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
        data: [32, 45, 23, 56, 39]
      }]
    });


    var data1 = [4, 8, 2, 5, 3];
    var data2 = [32, 45, 23, 56, 39]
    //计时器动态更新
    setInterval(() => {
      data1 = data1.map(item => {
        item += 9
        if (item > 80) {
          item += 25
        }
        return item
      })
      data2 = data2.map(item => {
        item++
        if (item > 120) {
          item += 40
        }
        return item
      })
      myChart.setOption({
        series: [
          {
            data: data1
          },
          {
            data: data2
          }
        ]
      })
    }, 5000);

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
