/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { SWeek } from './style';

interface Props {}

// eslint-disable-next-line
function Week({}: Props) {
  return (
    <SWeek>
      <Row></Row>
    </SWeek>
  );
}
export default memo(Week);
