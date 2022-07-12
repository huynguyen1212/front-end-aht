/*
 *
 * HomeWeatherApp reducers
 * make by huynq
 */
import { Reducer } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as types from './constants';
import { ActionsHomeWeatherApp, StoreHomeWeatherApp } from './types';

const initState: StoreHomeWeatherApp = {};

const reducersHomeWeatherApp: Reducer<
  StoreHomeWeatherApp,
  ActionsHomeWeatherApp
> = (state = initState, actions: ActionsHomeWeatherApp) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default reducersHomeWeatherApp;
