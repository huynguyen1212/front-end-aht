/*
 *
 * Home
 *
 */

import React, { memo, useState } from 'react';
import ErrorBound from 'components/ErrorBound';

import reducersHome from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';
import {
  SAboutUs,
  SActivity,
  SBanner,
  SFooter,
  SHeader,
  SHome,
  SProduct,
} from './style';
import logo from 'assets/images/logo.png';
import banner from 'assets/images/banner.png';
import imgdumbble from 'assets/images/img_dumbble.png';
import icondumbble from 'assets/images/icon_dumbble.png';
import imgstrenght from 'assets/images/img_strenght.png';
import iconstrenght from 'assets/images/icon_strenght.png';
import imgpower from 'assets/images/img_power.png';
import iconpower from 'assets/images/icon_power.png';
import iconbrand from 'assets/images/icon_brand.png';
import iconbrand2 from 'assets/images/icon_brand2.png';
import iconbrand3 from 'assets/images/icon_brand3.png';
import iconbrand4 from 'assets/images/icon_brand4.png';
import iconbrand5 from 'assets/images/icon_brand5.png';
import iconbrand6 from 'assets/images/icon_brand6.png';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBasketFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsArrowLeftRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

import { BiMap } from 'react-icons/bi';
import { AiTwotonePhone } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { AiFillClockCircle } from 'react-icons/ai';

import { Col, Container, Row } from 'styled-bootstrap-grid';
import { dataContact, dataInfor, dataProduct, dataQuick } from './data';
import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  useInjectReducer('Home', reducersHome);
  const [tab, settab] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleCloseMenu = () => {
    let menuDOM = document.getElementsByClassName(
      'for_responsive',
    )[0] as HTMLElement;
    menuDOM!.style.left = '-300px';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
  };

  const handleOpenMenu = () => {
    let menuDOM = document.getElementsByClassName(
      'for_responsive',
    )[0] as HTMLElement;

    menuDOM!.style.left = '0px';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
  };

  const onToggleMenu = () => {
    let menuDOM = document.getElementsByClassName('links')[0] as HTMLElement;
    if (menuDOM.style.left === '0px') {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  };

  return (
    <ErrorBound>
      <SHome>
        <SHeader>
          <Container>
            <div className="header">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>

              <div className="links">
                <div className="for_responsive">
                  <button id="close-menu" onClick={handleCloseMenu}>
                    <FontAwesomeIcon icon={faWindowClose} />
                  </button>

                  <div className="menu">
                    <div className="menu_item">Home</div>
                    <div className="menu_item menu_item_spec">Pages</div>
                    <div className="menu_item menu_item_spec">Classes</div>
                    <div className="menu_item menu_item_spec">Portfodivo</div>
                    <div className="menu_item menu_item_spec">Blog</div>
                    <div className="menu_item menu_item_spec">Contacts</div>
                  </div>
                </div>

                <button
                  id="toggle-menu"
                  style={{ marginRight: '10px' }}
                  onClick={onToggleMenu}
                >
                  <FontAwesomeIcon color="white" icon={faBars} />
                </button>
              </div>

              <div className="icon">
                <div className="icon_item icon_item_spec">
                  <AiOutlineSearch color="white" size={'17px'} />
                </div>
                <div className="icon_item icon_item_spec">
                  <BsFillBasketFill color="white" size={'17px'} />
                </div>
                <div className="icon_item">
                  <BsPersonFill color="white" size={'17px'} />
                </div>
              </div>
            </div>
          </Container>
        </SHeader>

        <SBanner>
          {/* <img className="img_banner" src={banner} alt="" /> */}

          <Container>
            <div className="banner">
              <p className="title">Dumbbells Shop</p>

              <p className="title_lit">Best body fitness</p>

              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <br /> Lorem Ipsum has been the industry's standard dummy text
                ever since the
                <br /> 1500s, when an unknown printer
              </p>

              <button>SHOP NOW</button>
            </div>
          </Container>
        </SBanner>

        <SActivity>
          <Container>
            <div className="activity">
              <div className="activity_item">
                <div className="activity_image">
                  <img src={imgdumbble} alt="" />
                </div>

                <div className="activity_text">
                  <img
                    className="activity_text_icon"
                    src={icondumbble}
                    alt=""
                  />
                  <p className="activity_text_title">dumbbells</p>
                  <p className="activity_text_content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              <div className="activity_item">
                <div className="activity_text">
                  <img
                    className="activity_text_icon"
                    src={iconstrenght}
                    alt=""
                  />
                  <p className="activity_text_title">Strength</p>
                  <p className="activity_text_content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>

                <div className="activity_image">
                  <img src={imgstrenght} alt="" />
                </div>
              </div>

              <div className="activity_item">
                <div className="activity_image">
                  <img src={imgpower} alt="" />
                </div>

                <div className="activity_text">
                  <img className="activity_text_icon" src={iconpower} alt="" />
                  <p className="activity_text_title">{`power rack & cages`}</p>
                  <p className="activity_text_content">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </SActivity>

        <SProduct>
          <Container>
            <div className="product">
              <div className="tab_control">
                <p
                  className={`tab_control_item ${tab === 0 && 'active'}`}
                  onClick={() => settab(0)}
                >
                  Top Sellers
                </p>
                <p
                  className={`tab_control_item ${tab === 1 && 'active'}`}
                  onClick={() => settab(1)}
                >
                  Featured
                </p>
                <p
                  className={`tab_control_item ${tab === 2 && 'active'}`}
                  onClick={() => settab(2)}
                >
                  Most Reviews
                </p>
              </div>

              <div className="tab_content">
                {tab === 0 ? (
                  <div className={`top_sellers tab_content__item`}>
                    <Row>
                      {dataProduct.map((data: any, i: number) => {
                        return (
                          <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                            <div className="product_item">
                              <img
                                className="product_item_img"
                                src={data.image}
                                alt=""
                              />

                              <div className="product_item_text">
                                <p className="product_item_name">{data.name}</p>
                                <p className="product_item_price">
                                  {data.price}
                                </p>
                              </div>

                              <div className="button_hover">
                                <div className="button_item">
                                  <button>
                                    <BsFillBasketFill />
                                  </button>
                                </div>

                                <div className="button_item">
                                  <button>
                                    <AiOutlineEye />
                                  </button>
                                </div>

                                <div className="button_item">
                                  <button>
                                    <AiFillHeart />
                                  </button>
                                </div>

                                <div className="button_item">
                                  <button>
                                    <BsArrowLeftRight />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                ) : tab === 1 ? (
                  <div className={`featured tab_content__item`}>
                    <Row>
                      {dataProduct.map((data: any, i: number) => {
                        return (
                          <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                            <div className="product_item">
                              <img
                                className="product_item_img"
                                src={data.image}
                                alt=""
                              />
                              <p className="product_item_name">{data.name}</p>
                              <p className="product_item_price">{data.price}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                ) : (
                  <div className={`most_reviews tab_content__item`}>
                    <Row>
                      {dataProduct.map((data: any, i: number) => {
                        return (
                          <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                            <div className="product_item">
                              <img
                                className="product_item_img"
                                src={data.image}
                                alt=""
                              />
                              <p className="product_item_name">{data.name}</p>
                              <p className="product_item_price">{data.price}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </SProduct>

        <SAboutUs>
          <Container>
            <div className="about_us">
              <Slider {...settings}>
                <div className="about_us_item">
                  <p className="title">See What They Said About Us</p>

                  <div className="avatar">
                    <img src={imgpower} alt="" />
                  </div>

                  <p className="content">
                    “Good services. I bought a bicycle with a wrong but they
                    accepted free return for me
                    <br /> and exchange a new product for me.
                  </p>

                  <p className="name">LINA</p>

                  <p className="des">Happy Client</p>
                </div>
                <div className="about_us_item">
                  <p className="title">See What They Said About Us</p>

                  <div className="avatar">
                    <img src={imgpower} alt="" />
                  </div>

                  <p className="content">
                    “Good services. I bought a bicycle with a wrong but they
                    accepted free return for me
                    <br /> and exchange a new product for me.
                  </p>

                  <p className="name">LINA</p>

                  <p className="des">Happy Client</p>
                </div>
                <div className="about_us_item">
                  <p className="title">See What They Said About Us</p>

                  <div className="avatar">
                    <img src={imgpower} alt="" />
                  </div>

                  <p className="content">
                    “Good services. I bought a bicycle with a wrong but they
                    accepted free return for me
                    <br /> and exchange a new product for me.
                  </p>

                  <p className="name">LINA</p>

                  <p className="des">Happy Client</p>
                </div>
              </Slider>
            </div>

            <div className="contract">
              <Row>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand} alt="" />
                  </div>
                </Col>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand2} alt="" />
                  </div>
                </Col>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand3} alt="" />
                  </div>
                </Col>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand4} alt="" />
                  </div>
                </Col>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand5} alt="" />
                  </div>
                </Col>
                <Col xl={2} lg={2} md={4} sm={4} xs={12}>
                  <div className="contract_item">
                    <img src={iconbrand6} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </SAboutUs>

        <SFooter>
          <Container>
            <div className="footer_top">
              <img src={logo} alt="" className="logo" />

              <p className="content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <br /> industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type
              </p>

              <div className="icon">
                <div className="icon_item">
                  <FaFacebookF size={'18px'} />
                </div>
                <div className="icon_item">
                  <AiOutlineTwitter size={'18px'} />
                </div>
                <div className="icon_item">
                  <AiOutlineGooglePlus size={'18px'} />
                </div>
                <div className="icon_item">
                  <BsYoutube size={'18px'} />
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="footer_bottom">
              <Row>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <p className="title">Contact us</p>

                  <div className="item">
                    <BiMap /> 200 Lincoln Ave, Salinas, CA 93901
                  </div>
                  <div className="item">
                    <AiTwotonePhone /> 023 32423 223
                  </div>
                  <div className="item">
                    <HiMail /> gymax@example.com
                  </div>
                  <div className="item">
                    <AiFillClockCircle /> 9:00 - 20:00 All day
                  </div>
                </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <p className="title">My Account</p>

                  {dataContact.map((d: any, i: number) => {
                    return <div className="item">{d}</div>;
                  })}
                </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <p className="title">Information</p>

                  {dataInfor.map((d: any, i: number) => {
                    return <div className="item">{d}</div>;
                  })}
                </Col>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <p className="title">Quick link</p>

                  {dataQuick.map((d: any, i: number) => {
                    return <div className="item">{d}</div>;
                  })}
                </Col>
              </Row>
            </div>
          </Container>

          <p className="copyright">
            Copyright © 2019 Gymax - Design by ArrowHitech - All Rights Reserved
          </p>
        </SFooter>
      </SHome>
    </ErrorBound>
  );
}

export default memo(Home);
