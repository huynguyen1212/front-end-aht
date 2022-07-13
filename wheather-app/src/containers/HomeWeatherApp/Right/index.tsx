/*
 *
 * HomeWeatherApp
 * make by huynq
 */

import React, { memo, useState } from 'react';
import Hour from './Hour';
import { SRight } from './style';
import Today from './Today';
import Week from './Week';

interface Props {
  data: any;
}

// eslint-disable-next-line
function Right({ data }: Props) {
  const [tab, settab] = useState(0);

  return (
    <SRight>
      <div className="tab_control">
        <p
          className={`tab_control_item ${tab === 0 && 'active'}`}
          onClick={() => settab(0)}
        >
          Today
        </p>
        <p
          className={`tab_control_item ${tab === 1 && 'active'}`}
          onClick={() => settab(1)}
        >
          Week
        </p>
        <p
          className={`tab_control_item ${tab === 2 && 'active'}`}
          onClick={() => settab(2)}
        >
          Hour
        </p>
      </div>

      <div className="tab_content">
        {tab === 0 ? (
          <Today current={data?.current} />
        ) : tab === 1 ? (
          <Week daily={data?.daily} />
        ) : (
          <Hour hourly={data?.hourly} />
        )}
      </div>
    </SRight>
  );
}
export default memo(Right);
