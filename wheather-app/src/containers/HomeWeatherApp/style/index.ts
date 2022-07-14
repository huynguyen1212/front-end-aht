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

  @media screen and (max-width: 1199px) {
    padding: 0px 30px;
    
    .left {
      overflow: auto;
      padding: 10px;
    }

    .right {
      padding: 10px;
    }
  }

  @media screen and (max-width: 991px) {
    padding: 0px 10px;
    overflow: auto;

    .left {
      margin-right: 0;
      overflow: hidden;
      height: unset;
      margin-bottom: 10px;
    }

    .right {
      margin-left: 0;
    }
  }
`;

export default WrapHomeWeatherApp;
