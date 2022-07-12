/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo } from 'react';

import { SLeft } from './style';
import iconbrand from 'assets/images/icon_brand.png';
import img_bottom from 'assets/images/weatherapp/img_bottom.webp';

interface Props {}

// eslint-disable-next-line
function Left({}: Props) {
  return (
    <SLeft>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="result_search">
        <img src={iconbrand} alt="" />

        <p className="title">Ha Noi</p>

        <p className="temperature">32°C</p>

        <p className="time">Monday, 11:10 am</p>

        <p className="des1">Broken Clouds</p>

        <p className="des2">Clouds 84%</p>
      </div>

      <div className="img_bottom">
        <img src={img_bottom} alt="" />

        <p className="title_bottom">Ha Noi</p>
      </div>
    </SLeft>
  );
}
export default memo(Left);
