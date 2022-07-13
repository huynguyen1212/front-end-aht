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

    p {
      margin: 0;
    }

    .today_item_name {
      text-align: left;
      color: rgb(0 0 0/26%);
      font-size: 16px;
    }

    img {
      margin: 10px 0;
      color: #ffc107;
    }

    .today_item_content {
      color: #6c757d;
      font-size: 18px;
    }
  }
`;

export const SWeek = styled.div``;

export const SHour = styled.div``;
