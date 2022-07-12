/*
*
* HomeWeatherApp selecters
* make by huynq
*/
import rootReducer from "redux/root-reducers";

export const selectHomeWeatherAppStore = ((state: ReturnType<typeof rootReducer>) => state.HomeWeatherApp)