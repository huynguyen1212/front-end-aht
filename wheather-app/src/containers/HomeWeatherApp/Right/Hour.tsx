/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';
import { SHour } from './style';
import CanvasJSReact from '../../../components/canvasjs-3.6.6/canvasjs.react';
import { format_date, format_date_24 } from 'helpers';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
interface Props {
  hourly: any;
}

// eslint-disable-next-line
function Hour({ hourly }: Props) {
  const [optionsFinal, setoptionsFinal] = useState<any>();

  const [dataPoint1, setdataPoint1] = useState<any[]>([]);
  const [dataPoint2, setdataPoint2] = useState<any[]>([]);

  console.log('dataPoint1: ', dataPoint1);

  useEffect(() => {
    let data1: any[] = [];
    let data2: any[] = [];

    const a = new Date().getHours();

    for (let i = 0; i < hourly?.length; i++) {
      let b = new Date().setHours(a + i);
      data1.push({
        y: hourly[i]?.temp,
        label: format_date_24(new Date(b).getHours()),
      });
      data2.push({
        y: hourly[i]?.feels_like,
        label: format_date_24(new Date(b).getHours()),
      });
    }

    setdataPoint1(data1);
    setdataPoint2(data2);
  }, [hourly]);

  useEffect(() => {
    const options = {
      animationEnabled: true,
      title: {
        text: 'Temperature',
      },
      // axisY : {
      //   title: "Number of Customers"
      // },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: 'spline',
          name: 'Temp',
          showInLegend: true,
          dataPoints: [...dataPoint1],
        },
        {
          type: 'spline',
          name: 'Feels like',
          showInLegend: true,
          dataPoints: [...dataPoint2],
        },
      ],
    };
    setoptionsFinal(options);
  }, [dataPoint1, dataPoint2]);

  return (
    <SHour>
      <CanvasJSChart options={optionsFinal} />
    </SHour>
  );
}
export default memo(Hour);
