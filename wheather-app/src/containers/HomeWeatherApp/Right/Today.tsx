/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { SToday } from './style';

import { ReactComponent as Sun } from 'assets/images/weatherapp/sun.svg';
import { ReactComponent as Wind } from 'assets/images/weatherapp/wind.svg';
import { ReactComponent as Sunrise } from 'assets/images/weatherapp/sunrise.svg';
import { ReactComponent as Sunset } from 'assets/images/weatherapp/sunset.svg';
import { ReactComponent as Humidity } from 'assets/images/weatherapp/humidity.svg';
import { ReactComponent as Visibility } from 'assets/images/weatherapp/visibility.svg';
import { ReactComponent as Pressure } from 'assets/images/weatherapp/pressure.svg';
import { format_date } from 'helpers';

interface Props {
  current: any;
}

// eslint-disable-next-line
function Today({ current }: Props) {
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  useEffect(() => {
    let sr = new Date(0);
    sr.setUTCSeconds(current?.sunrise);
    let ss = new Date(0);
    ss.setUTCSeconds(current?.sunset);

    setSunrise(format_date(sr.getHours() + ':00'));
    setSunset(format_date(ss.getHours() + ':00'));
  }, [current]);

  return (
    <SToday>
      <Row>
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <div className="today_item_img">
              <Sun color="#ffc107" fontSize={'50px'} />
            </div>
            <p className="today_item_content">{current ? current?.uvi : '0'}</p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">Wind Status</p>
            <div className="today_item_img">
              <Wind
                color="rgba(13,110,253,.7686274509803922)"
                fontSize={'50px'}
              />
            </div>
            <p className="today_item_content">
              {Number(current ? current?.wind_speed : 0) * 3.6} km/h
            </p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">{`Sunrise & Sunset`}</p>

            <p className="today_item_content">
              <div className="today_item_img today_item_img_spec">
                <Sunrise color="#ffc107" fontSize={'40px'} />
                <span>{current ? sunrise : '00'} am</span>
              </div>
            </p>

            <p className="today_item_content">
              <div className="today_item_img today_item_img_spec">
                <Sunset color="#ffc107" fontSize={'40px'} />
                <span>{current ? sunset : '00'} pm</span>
              </div>
            </p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">Humidity</p>
            <div className="today_item_img">
              <Humidity
                color="rgba(13,110,253,.7686274509803922)"
                fontSize={'50px'}
              />
            </div>
            <p className="today_item_content">
              {current ? current?.humidity : '0'} %
            </p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">Visibility</p>
            <div className="today_item_img">
              <Visibility color="#ffc107" fontSize={'50px'} />
            </div>
            <p className="today_item_content">
              {current ? current?.visibility / 1000 : '0'} km
            </p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">Pressure</p>
            <div className="today_item_img">
              <Pressure
                color="rgba(13,110,253,.7686274509803922)"
                fontSize={'50px'}
              />
            </div>
            <p className="today_item_content">
              {current ? current?.pressure : '0'} hPa
            </p>
          </div>
        </Col>
      </Row>
    </SToday>
  );
}
export default memo(Today);
