import styled from 'styled-components';
import banner from 'assets/images/banner.png';

export const SHome = styled.div``;

export const SHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  z-index: 1000;

  .header {
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0;

    .logo {
      cursor: pointer;

      width: 200px;
      height: 55px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .links {
      margin-right: 38px;

      .for_responsive {
        .menu {
          display: flex;
          margin: 8px -25px 0;
          align-items: center;
          justify-content: flex-start;

          .menu_item {
            cursor: pointer;
            font-size: 16px;
            line-height: 28px;
            color: #ffffff;
            font-weight: 400;
            font-family: 'Poppins';
            margin: 0 25px;
          }

          /* .menu_item_spec {
            margin: 0;
          } */
        }
      }
    }

    .icon {
      display: flex;
      margin: 11px -26px 0;
      .icon_item {
        padding: 0 26px;
        cursor: pointer;
      }

      .icon_item_spec {
        border-right: 1px solid white;
      }
    }

    #toggle-menu,
    #close-menu {
      display: none;
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1199px) {
    .header .links {
      margin-right: unset;
      .for_responsive .menu .menu_item {
        margin: 0 15px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .header {
      display: grid;
      grid-template-columns: 8fr 1fr 1fr;

      .links {
        .for_responsive {
          min-height: 100%;
          overflow-y: auto;
          align-items: flex-start;
          position: fixed;
          z-index: 10;
          height: 100vh;
          top: 0;
          left: -300px;
          width: 250px;
          background: #102136;
          padding: 40px 10px;
          transition: 0.3s all;

          .menu {
            display: block;
          }

          #close-menu {
            position: absolute;
            right: 10px;
            top: 10px;
            color: white;
          }
        }
      }

      #toggle-menu,
      #close-menu {
        display: block;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .header {
      grid-template-columns: 3fr 1fr 1fr;

      .logo {
        width: 150px;
        height: 40px;
      }

      .icon {
        margin: unset;

        .icon_item {
          padding: 0 7px;
        }
      }
    }
  }
`;

export const SBanner = styled.div`
  position: relative;
  padding: 296px 0 316px 0;
  background-image: url(${banner});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  /* .img_banner {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
  } */

  .banner {
    p {
      color: #fff;
      margin-top: 0;
    }

    .title {
      font-size: 59px;
      font-weight: 600;
      margin-bottom: 0;
    }

    .title_lit {
      font-size: 39px;
      font-weight: 600;
      margin-top: -7px;
      margin-bottom: 18px;
    }

    .content {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      margin-bottom: 57px;
    }

    button {
      cursor: pointer;
      padding: 12px 45px;
      border: 1px solid white;
      background: transparent;

      font-size: 14px;
      line-height: 24px;
      color: #fff;
      font-weight: 400;
      text-align: center;
    }
  }

  @media screen and (max-width: 1199px) {
    background-position: top;
    .banner {
      .title {
        font-size: 45px;
        margin-bottom: 0px;
      }

      .title_lit {
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 0;
      }

      button {
        padding: 14px 33px;
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .banner {
      width: unset;

      .title {
        font-size: 32px;
      }
      .title_lit {
        font-size: 25px;
      }

      .content {
        font-size: 13px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const SActivity = styled.div`
  margin-top: -75px;
  margin-bottom: 90px;

  .activity {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
    background-color: #ffffff;
    display: flex;
    height: 100%;

    .activity_item {
      height: 100%;
      display: flex;
      flex-direction: column;

      .activity_image {
        flex: 1;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .activity_text {
        flex: 1;
        text-align: center;
        background-color: white;
        padding: 29px 25px;

        .activity_text_icon {
          margin-bottom: 18px;
        }

        .activity_text_title {
          font-size: 18px;
          color: #000000;
          font-weight: 700;
          text-transform: uppercase;
          margin: 0 0 16px;
        }

        .activity_text_content {
          font-size: 14px;
          line-height: 24px;
          color: #777777;
          font-weight: 400;
          margin: 0 0 6px;
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    .activity {
      display: block;
      filter: unset;

      .activity_item {
        margin-bottom: 20px;
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
      }
    }
  }
`;

export const SProduct = styled.div`
  .product {
    .tab_control {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dddddd;
      margin-bottom: 40px;

      .tab_control_item {
        font-size: 19px;
        line-height: 24px;
        color: black;
        font-weight: 700;
        font-family: 'Poppins';
        padding: 0px 19px 15px;
        margin: 0;
        cursor: pointer;

        &:hover {
          color: #dd2f31;
          border-bottom: 2px solid #dd2f31;
        }
      }

      .active {
        color: #dd2f31;
        border-bottom: 2px solid #dd2f31;
      }
    }

    .tab_content {
      .tab_content__item {
        .product_item {
          background-color: #ffffff;
          margin-bottom: 47px;
          position: relative;

          .product_item_img {
            width: 100%;
          }

          .product_item_text {
            padding: 18px 0 28px 25px;

            .product_item_name {
              font-size: 14px;
              line-height: 24px;
              color: #000000;
              font-weight: 400;
              margin: 0;
            }

            .product_item_price {
              font-size: 14px;
              line-height: 24px;
              color: #000000;
              font-weight: 700;
              margin: 0;
            }
          }

          .button_hover {
            position: absolute;
            top: 18px;
            right: 22px;
            margin: -8px 0;
            display: none;

            .button_item {
              margin: 8px 0;
              button {
                border-top-left-radius: 5px;
                border-bottom-right-radius: 5px;
                background-color: rgba(221, 47, 49, 0);
                border: 1px solid #dddddd;
                padding: 10px;
                cursor: pointer;
                color: #515357;

                &:hover {
                  background-color: red;
                  color: white;
                }
              }
            }
          }

          &:hover {
            filter: drop-shadow(0 0 2.5px rgba(0, 0, 0, 0.2));

            .button_hover {
              display: block;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    .product .tab_control .tab_control_item {
      font-size: 14px;
      padding: 0 10px 10px;
    }
  }
`;

export const SAboutUs = styled.div`
  margin-bottom: 36px;

  .about_us {
    text-align: center;
    margin-bottom: 40px;
    padding: 55px 100px 120px 100px;
    border-bottom: 1px solid #cccccc;

    .about_us_item {
      p {
        margin: 0;
      }

      .title {
        font-size: 36px;
        line-height: 30px;
        color: #000000;
        font-weight: 700;
        font-family: 'Poppins';
        text-align: center;
        margin-bottom: 57px;
      }

      .avatar {
        display: flex;
        justify-content: center;
        margin: 0 0 22px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 40px;
        }
      }

      .content {
        font-size: 18px;
        line-height: 30px;
        color: #777777;
        font-weight: 400;
        font-family: 'Poppins';
        text-align: center;

        margin-bottom: 26px;
      }

      .name {
        font-size: 18px;
        line-height: 30px;
        color: #000000;
        font-weight: 700;
        font-family: 'Poppins';
        text-align: center;
        margin-bottom: 2px;
      }

      .des {
        font-size: 15px;
        line-height: 30px;
        color: #000000;
        font-weight: 400;
        font-family: 'Poppins';
        text-align: center;

        margin-bottom: 23px;
      }
    }

    .slick-slider {
      .slick-dots {
        li {
          margin: 0;
          button:before {
            font-size: 13px;
          }
        }

        .slick-active {
          button:before {
            color: #dd2f31;
          }
        }
      }
    }
  }

  .contract {
    .contract_item {
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 991px) {
    .contract {
      .contract_item {
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .about_us {
      margin-bottom: 30px;
      padding: 0;

      .about_us_item {
        .title {
          font-size: 26px;
        }

        .content {
          font-size: 14px;
        }
      }
    }
  }
`;

export const SFooter = styled.div`
  background-color: #222222;
  padding-top: 100px;

  .footer_top {
    text-align: center;

    .content {
      font-size: 14px;
      line-height: 24px;
      color: #777777;
      font-weight: 400;
      font-family: 'Poppins';
      text-align: center;

      margin: 27px 0 41px;
    }

    .icon {
      display: flex;
      justify-content: center;
      margin: 0 -22px;
      .icon_item {
        color: white;
        margin: 0 22px;
        cursor: pointer;
      }
    }
  }

  .line {
    margin: 53px 0;
    height: 1px;
    background-color: #444444;
  }

  .footer_bottom {
    margin: 0 0 39px -6px;

    .title {
      font-size: 18px;
      line-height: 30px;
      color: #ffffff;
      font-weight: 700;
      font-family: 'Poppins';
      text-transform: uppercase;

      margin-bottom: 16px;
    }

    .item {
      font-size: 14px;
      line-height: 40px;
      color: #777777;
      font-weight: 400;
      font-family: 'Poppins';

      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }

  .copyright {
    background-color: #111111;
    font-size: 14px;
    line-height: 30px;
    color: #777777;
    font-weight: 400;
    font-family: 'Poppins';
    text-align: center;
    padding: 10px 0;
    margin: 0;
  }
`;
