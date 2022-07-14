/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useEffect, useState } from 'react';
import { Col, Row } from 'styled-bootstrap-grid';
import { SWeek } from './style';
import { ReactComponent as Sun } from 'assets/images/weatherapp/sun.svg';
import { format_date } from 'helpers';
import moment from 'moment';
import { time } from 'console';

interface Props {
  daily: any;
}

// eslint-disable-next-line
function Week({ daily }: Props) {
  const [tab, settab] = useState<number>(0);

  const [dailyFinal, setdailyFinal] = useState<any[]>([]);

  const [content, setcontent] = useState<any>();

  const [day, setday] = useState<any[]>([]);

  useEffect(() => {
    const a = moment();
    let day: any[] = [];

    for (let i = 0; i < 8; i++) {
      day.push(a.add(1, 'day').format('dddd, Do/MM'));
    }
    setday(day);
  }, []);

  useEffect(() => {
    if (daily && day) {
      let dailyF: any[] = [];

      for (let i = 0; i < daily.length; i++) {
        let ob: any = {};
        ob = { ...daily[i] };
        ob.time = day[i];

        dailyF.push(ob);
      }
      setdailyFinal(dailyF);
    }
  }, [daily, day]);

  useEffect(() => {
    for (let i = 0; i < dailyFinal?.length; i++) {
      if (tab === i) {
        setcontent(dailyFinal[i]);
      }
    }
  }, [dailyFinal, tab]);

  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();

  useEffect(() => {
    let sr = new Date(0);
    sr.setUTCSeconds(content?.sunrise);
    let ss = new Date(0);
    ss.setUTCSeconds(content?.sunset);

    setSunrise(format_date(sr.getHours() + ':00'));
    setSunset(format_date(ss.getHours() + ':00'));
  }, [content]);

  return (
    <SWeek>
      <div className="daily_tab">
        <Row>
          {dailyFinal?.map((d: any, i: number) => {
            return (
              <Col
                xl={3}
                lg={3}
                md={3}
                sm={6}
                xs={12}
                key={i}
                onClick={() => settab(i)}
              >
                <div className={`daily_item ${tab === i ? 'active' : ''}`}>
                  <p className="time">{d?.time}</p>

                  <div className="img">
                    <Sun color="#ffc107" fontSize={'30px'} />
                  </div>

                  <p className="temperature">{`${Math.floor(
                    d?.temp?.min,
                  )}° - ${Math.floor(d?.temp?.max)}°`}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="daily_content">
        <p className="daily_content_time">{content?.time}7</p>

        <div className="daily_content_content">
          <div className="daily_content_side">
            <p className="daily_content_item">
              Temp current : {content?.temp?.day}°
            </p>
            <p className="daily_content_item">
              Temp :{' '}
              {`${Math.floor(content?.temp?.min)}° - ${Math.floor(
                content?.temp?.max,
              )}°`}
            </p>
            <p className="daily_content_item">
              Humidity : {content?.humidity} %
            </p>
            <p className="daily_content_item">
              Wind speed : {Number(content ? content?.wind_speed : 0) * 3.6}{' '}
              km/h
            </p>
          </div>

          <div className="daily_content_side">
            <p className="daily_content_item">Sunrise : {sunrise} am</p>
            <p className="daily_content_item">Sunset : {sunset} pm</p>
            <p className="daily_content_item">
              Description : {content?.weather[0]?.description}
            </p>
            <p className="daily_content_item">
              Atmospheric pressure : {content?.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </SWeek>
  );
}
export default memo(Week);
