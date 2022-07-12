/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersHomeWeatherApp from './store/reducers';
import WrapHomeWeatherApp from './style';
import { Col, Row } from 'styled-bootstrap-grid';
import Left from './Left';
import Right from './Right';

interface Props {}

// eslint-disable-next-line
function HomeWeatherApp({}: Props) {
  useInjectReducer('HomeWeatherApp', reducersHomeWeatherApp);
  return (
    <ErrorBound>
      <WrapHomeWeatherApp>
        <Row>
          <Col xl={3} lg={3} md={3} sm={12} xs={12}>
            <Left />
          </Col>

          <Col xl={9} lg={9} md={9} sm={12} xs={12}>
            <Right />
          </Col>
        </Row>
      </WrapHomeWeatherApp>
    </ErrorBound>
  );
}
export default memo(HomeWeatherApp);
