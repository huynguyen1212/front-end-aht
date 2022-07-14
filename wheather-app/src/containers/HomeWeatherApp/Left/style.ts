import styled from 'styled-components';

export const SLeft = styled.div`
  .search {
    margin-bottom: 30px;

    input {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      padding-left: 15px;
      font-size: 18px;
      border: 1px solid darkgray;
      font-weight: 600;
      font-family: 'Poppins';
    }
  }

  .result_search {
    margin-bottom: 10px;

    img {
      width: 50%;
    }

    p {
      margin: 0;
    }

    .title {
      font-size: 34px;
      font-weight: 500;
    }

    .temperature {
      font-size: 44px;
      font-weight: 500;
      line-height: 47px;
      margin-bottom: 17px;
    }

    .time {
      font-size: 22px;
      font-weight: 500;
      line-height: 23px;
      margin-bottom: 10px;
    }

    .des1 {
      font-weight: 500;
      color: #6c757d;
      font-size: 17px;
    }

    .des2 {
      font-size: 17px;
      font-weight: 500;
      color: #6c757d;
    }
  }

  .img_bottom {
    position: relative;

    img {
      width: 100%;
      border-radius: 2px;
      position: relative;
    }

    .title_bottom {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);

      color: white;
      font-size: 30px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1199px) {
    .search input {
      font-size: 14px;
      font-weight: 400;
    }

    .result_search {
      .title {
        font-size: 26px;
      }

      .temperature {
        font-size: 28px;
      }

      .time {
        font-size: 18px;
      }

      .des1 {
        font-size: 15px;
      }

      .des2 {
        font-size: 15px;
      }
    }

    .img_bottom .title_bottom {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 991px) {
    .result_search img {
      width: unset;
    }

    .img_bottom {
      display: none;
    }
  }
`;
