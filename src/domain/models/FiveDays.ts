/* eslint-disable @typescript-eslint/no-explicit-any */
import getIcon from "@/services/getIcon";

export type OneDayType = {
  id: number;
  pressure: number;
  state: string;
  stateDescription: string;
  stateIcon: string;
  temperature: number;
  temperatureMax: number;
  temperatureMin: number;
  time: string;
  windAngle: number;
  windSpeed: number;
}

export type FiveDaysType = {
  [key: string]: OneDayType[];
}

const FiveDays = (data: any): FiveDaysType => {
  const collection = data.list.map((element: any) => ({
    pressure: element.main.pressure,
    temperature: element.main.temp,
    temperatureMin: element.main.temp_min,
    temperatureMax: element.main.temp_max,
    state: element.weather[0].main,
    stateDescription: element.weather[0].description,
    stateIcon: `icon-${getIcon(element.weather[0].icon)}`,
    windSpeed: element.wind.speed,
    windAngle: element.wind.deg,
    time: element.dt_txt,
    id: element.dt,
  }));

  const groupCollectionByDay = collection.reduce((prev: any, current: any) => {
    const timeDay = current.time.split(" ")[0];
    const timeHour = current.time.split(" ")[1];

    prev[timeDay] = (prev[timeDay] || []).concat(current);
    current.time = timeHour;
    return prev;
  }, {});  

  return groupCollectionByDay;
}

export default FiveDays;
