import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FunctionComponent } from "react";
import {
  FiveDaysForecastData,
  Forecast
} from "../../domain/five-days-forecast-entity";
import styles from "./FiveDaysForecast.module.css";

const colorPalette = [
  "#6b70d1",
  "#0090e8",
  "#00abea",
  "#00c2db",
  "#00d4c4",
  "#55d6a6",
  "#84d588",
  "#aed26f",
  "#c8c055",
  "#dfab4a",
  "#f0944e",
  "#fb7c5f"
];

export const FiveDaysForecast: FunctionComponent<{
  fiveDaysData: FiveDaysForecastData | null;
}> = ({ fiveDaysData }) => {
  if (!fiveDaysData) return null;

  const chartData = formatForecastData(fiveDaysData);

  const options: Highcharts.Options = {
    chart: {
      backgroundColor: "transparent"
    },
    title: {
      text: "Próximas horas",
      style: {
        color: "white"
      }
    },
    legend: {
      enabled: false
    },
    xAxis: [
      {
        id: "days",
        categories: chartData.map((data) => data.dayOfTheWeek),
        lineColor: "#FFFFFF88",
        labels: {
          style: {
            color: "white",
            fontSize: "12px"
          }
        }
      },
      {
        id: "hours",
        categories: chartData.map((data) => data.hour),
        lineWidth: 0,
        offset: 15,
        labels: {
          style: {
            color: "white",
            fontSize: "10px"
          }
        },
        linkedTo: 0
      }
    ],
    yAxis: {
      title: {
        text: ""
      },
      labels: {
        formatter: function () {
          return this.value + "º";
        },
        style: {
          color: "white"
        }
      },
      gridLineColor: "#FFFFFF44",
      gridLineWidth: 1,
      gridLineDashStyle: "Dot"
    },
    series: [
      {
        name: "Temperatura",
        data: chartData.map((data) => ({
          y: data.temperature,
          colorValue: data.temperature
        })),
        type: "spline",
        marker: {
          enabled: false
        },
        lineWidth: 2,
        linecap: "round",
        zoneAxis: "y",
        zones: [...Array(11).keys()].map((i) => ({
          value: i * 3,
          color: colorPalette[i]
        }))
      }
    ]
  };

  return (
    <div className={styles.fiveDays}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

interface ChartData {
  date: number;
  temperature: number;
  dayOfTheWeek: string;
  hour: string;
}

export const formatForecastData = (
  fiveDaysData: FiveDaysForecastData
): ChartData[] => {
  return fiveDaysData.list.map((data: Forecast) => {
    return {
      date: data.date,
      temperature: data.temperature,
      dayOfTheWeek: getDayOfTheWeek(data.date),
      hour: getFormattedHour(data.date)
    };
  });
};

const getDayOfTheWeek = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const dayOfMonth = date.getDate();
  const dayOfWeek = date
    .toLocaleString("es-ES", { weekday: "short" })
    .charAt(0)
    .toUpperCase();

  return `${dayOfWeek}${dayOfMonth}`;
};

const getFormattedHour = (timestamp: number): string => {
  const hour = new Date(timestamp * 1000).getHours();
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return `${hour} PM`;
  return `${hour} PM`;
};
