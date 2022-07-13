import styled from 'styled-components';

export const SRight = styled.div`
  .tab_control {
    display: flex;
    align-items: center;
    margin: 0 -10px 20px;

    .tab_control_item {
      font-size: 20px;
      line-height: 24px;
      color: #6c757d;
      font-weight: 700;
      font-family: 'Poppins';
      padding-bottom: 10px;
      margin: 0 10px;
      cursor: pointer;

      &:hover {
        color: #212529;
        border-bottom: 2px solid #212529;
      }
    }

    .active {
      color: #212529;
      border-bottom: 2px solid #212529;
    }
  }
`;

export const SToday = styled.div`
  .today_item {
    padding: 20px 10px;
    background-color: white;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 20px;
    min-height: 190px;

    p {
      margin: 0;
    }

    .today_item_name {
      text-align: left;
      color: rgb(0 0 0/26%);
      font-size: 20px;
    }

    .today_item_img {
      margin: 10px 0;
    }

    .today_item_img_spec {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-left: 20px;

      span {
        margin-left: 10px;
      }
    }

    .today_item_content {
      color: #6c757d;
      font-size: 21px;
      font-weight: 600;
    }
  }
`;

export const SWeek = styled.div`
  p {
    margin: 0;
  }

  .daily_tab {
    margin: 0 10px;
    .daily_item {
      text-align: center;
      background-color: white;
      border-radius: 4px;
      padding: 10px;
      margin: 0 -10px 20px -10px;

      color: rgb(0 0 0/26%);

      .time {
        text-align: left;
        font-size: 18px;
      }

      .img {
        margin: 10px 0;
      }

      .temperature {
        font-size: 19px;
        font-weight: 600px;
        color: #6c757d;
      }
    }

    .active {
      background-color: #0dcaf0;
    }
  }

  .daily_content {
    background-color: white;
    padding: 10px;

    .daily_content_time {
      color: #6c757d;
      font-size: 22px;
      margin-bottom: 15px;
    }

    .daily_content_content {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .daily_content_side {
        .daily_content_item {
          margin-bottom: 15px;
          color: #6c757d;
          font-size: 16px;
        }
      }
    }
  }
`;

export const SHour = styled.div``;
