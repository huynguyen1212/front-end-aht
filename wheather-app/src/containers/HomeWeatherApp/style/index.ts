/*
 *
 * HomeWeatherApp style css file
 * make by huynq
 */

import styled from 'styled-components';

const WrapHomeWeatherApp = styled.div`
  height: 90vh;
  width: 100%;
  padding: 0 60px;
  position: absolute;
  overflow: hidden;
  top: 35px;
  right: 0;

  .left {
    background-color: white;
    margin-right: -15px;
    padding: 25px;
    height: 90vh;
  }

  .right {
    background-color: rgb(246, 246, 248);
    margin-left: -15px;
    padding: 25px;
    height: 90vh;
    overflow: auto;
  }
`;

export default WrapHomeWeatherApp;
