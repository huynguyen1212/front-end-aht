/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { SHour } from './style';

interface Props {}

// eslint-disable-next-line
function Hour({}: Props) {
  return (
    <SHour>
      <Row></Row>
    </SHour>
  );
}
export default memo(Hour);
