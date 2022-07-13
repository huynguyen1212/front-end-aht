/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersHomeWeatherApp from './store/reducers';
import WrapHomeWeatherApp from './style';
import { Col, Row } from 'styled-bootstrap-grid';
import Left from './Left';
import Right from './Right';
import { request } from 'api/axios';

interface Props {}

// eslint-disable-next-line
function HomeWeatherApp({}: Props) {
  useInjectReducer('HomeWeatherApp', reducersHomeWeatherApp);
  const [data, setData] = useState();
  const [city, setcity] = useState();

  const [lat, setlat] = useState();
  const [lon, setlon] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      setlat(position.coords.latitude);
      setlon(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (lat && lon) {
      request({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=b2a7cbc687d973cb62fbd93c7bafee6f`,
      })
        .then((res: any) => {
          setData(res?.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [lat, lon]);

  return (
    <ErrorBound>
      <WrapHomeWeatherApp>
        <Row>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <div className="left">
              <Left data={data} setcity={setcity} />
            </div>
          </Col>

          <Col xl={9} lg={9} md={9} sm={12} xs={12}>
            <div className="right">
              <Right data={data} />
            </div>
          </Col>
        </Row>
      </WrapHomeWeatherApp>
    </ErrorBound>
  );
}
export default memo(HomeWeatherApp);
