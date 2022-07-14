/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';

import { SLeft } from './style';
import clouds from 'assets/images/weatherapp/Clouds.png';
import img_bottom from 'assets/images/weatherapp/img_bottom.webp';
import moment from 'moment';
import { request } from 'api/axios';

interface Props {
  data: any;
  setdataToday: any;
}

// eslint-disable-next-line
function Left({ data, setdataToday }: Props) {
  const time = moment().format('dddd, Do/MM');
  const [city, setcity] = useState<any>();
  const [name, setname] = useState('');

  useEffect(() => {
    if (data) {
      request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${data?.lat}&lon=${data?.lon}&appid=b2a7cbc687d973cb62fbd93c7bafee6f`,
      })
        .then((res: any) => {
          setname(res?.data?.name);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [data]);

  useEffect(() => {
    if (city) {
      request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=b2a7cbc687d973cb62fbd93c7bafee6f`,
      })
        .then((res: any) => {
          setdataToday(res?.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [city]);

  return (
    <SLeft>
      <div className="search">
        <input
          type="text"
          placeholder="Search City"
          onKeyPress={(e: any) => {
            if (e.key === 'Enter') {
              setcity(e.target.value);
            }
          }}
        />
      </div>

      <div className="result_search">
        <img src={clouds} alt="" />

        <p className="title">{name}</p>

        <p className="temperature">{data?.current?.temp}°C</p>

        <p className="time">{time}</p>

        <p className="des1">{data?.current?.weather[0]?.description}</p>

        <p className="des2">Clouds {data?.current?.clouds}%</p>
      </div>

      <div className="img_bottom">
        <img src={img_bottom} alt="" />

        <p className="title_bottom">{name}</p>
      </div>
    </SLeft>
  );
}
export default memo(Left);
