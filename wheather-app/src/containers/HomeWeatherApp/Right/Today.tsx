/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { SToday } from './style';

import { ReactComponent as Sun } from 'assets/images/weatherapp/sun.svg';

interface Props {}

// eslint-disable-next-line
function Today({}: Props) {
  return (
    <SToday>
      <Row>
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <Sun />
            <p className="today_item_content">{'dnscdc'}</p>
          </div>
        </Col>
        
        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <Sun />
            <p className="today_item_content">{'dnscdc'}</p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name"></p>

            <p className="today_item_content">
              <img src="" alt="" /> {'cdbcs'}
            </p>

            <p className="today_item_content">
              <img src="" alt="" /> {'cdbc'}
            </p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <Sun />
            <p className="today_item_content">{'dnscdc'}</p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <Sun />
            <p className="today_item_content">{'dnscdc'}</p>
          </div>
        </Col>

        <Col xl={4} lg={4} md={4} sm={6} xs={12}>
          <div className="today_item">
            <p className="today_item_name">UV index</p>
            <Sun />
            <p className="today_item_content">{'dnscdc'}</p>
          </div>
        </Col>
      </Row>
    </SToday>
  );
}
export default memo(Today);
