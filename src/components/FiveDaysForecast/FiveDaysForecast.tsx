import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { FunctionComponent } from "react";
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
      backgroundColor: "transparent",
      marginTop: 60,
      events: {
        render: function () {
          onRender(this);
        }
      }
    },
    title: {
      text: undefined
    },
    legend: {
      enabled: false
    },
    xAxis: [
      {
        id: "hours",
        categories: chartData.map((data) => data.hour),
        lineWidth: 0,
        offset: 10,
        opposite: true,
        labels: {
          style: {
            color: "white",
            fontSize: "10px"
          }
        }
      },
      {
        id: "conditions",
        categories: chartData.map((data) => data.stateDescription),
        lineWidth: 0,
        labels: {
          formatter: function () {
            return this.value.toString();
          },
          style: {
            color: "white",
            fontSize: "8px",
            width: 40,
            textTransform: "capitalize"
          },
          useHTML: true
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
    tooltip: {
      shared: true,
      useHTML: true,
      formatter: function () {
        const data = chartData[this.index];
        const dateLong = data.dateLong;
        return `<div>${dateLong}</div><br/>Temperatura: ${this.y}ºC<br/>Condiciones: ${data.stateDescription}`;
      }
    },
    series: [
      {
        name: "Temperature",
        data: chartData.map((data) => ({
          y: data.temperature,
          marker: {
            lineColor: colorPalette[Math.ceil(data.temperature / 3) + 1]
          }
        })),
        type: "spline",
        marker: {
          enabled: true,
          radius: 2.5,
          symbol: "circle",
          lineWidth: 1.5,
          fillColor: "white"
        },
        lineWidth: 2,
        linecap: "round",
        zoneAxis: "y",
        zones: [...Array(11).keys()].map((i) => ({
          value: i * 3,
          color: colorPalette[i + 1]
        }))
      }
    ],
    accessibility: {
      enabled: false
    }
  };

  const dataIndices = createDataIndices(chartData);

  const rectangles: Highcharts.SVGElement[] = [];
  const texts: Highcharts.SVGElement[] = [];

  const onRender = (chart: Highcharts.Chart): void => {
    const offset = chart.xAxis[0].toPixels(0) - chart.plotLeft;
    const y = 0;
    const height = chart.plotTop + chart.plotHeight;
    const textY = 20;

    for (const [index, { date, from, to }] of dataIndices.entries()) {
      const x = chart.xAxis[0].toPixels(from) - offset;
      const width = chart.xAxis[0].toPixels(to) - x + offset;
      const textX = x + width / 2 - 10;

      if (rectangles[index]) {
        rectangles[index].animate({
          x,
          y,
          width,
          height
        });
      } else {
        rectangles[index] = chart.renderer
          .rect(x, y, width, height)
          .attr({
            fill: index % 2 ? "rgba(255, 255, 255, 0.05)" : "transparent",
            zIndex: 1
          })
          .add();
      }

      if (texts[index]) {
        texts[index].animate({
          x: textX,
          y: textY
        });
      } else {
        texts[index] = chart.renderer
          .text(
            `<span style="font-size: 12px">${date}</span>`,
            textX,
            textY,
            true
          )
          .attr({
            color: "white"
          })
          .add();
      }
    }
  };

  return (
    <div className={styles.fiveDays}>
      <h2 className={styles.title}>Five days forecast</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

type ChartData = Pick<
  Forecast,
  "date" | "temperature" | "state" | "stateDescription" | "stateIcon"
> & {
  dayOfTheWeek: string;
  dateLong: string;
  hour: string;
};

export const formatForecastData = (
  fiveDaysData: FiveDaysForecastData
): ChartData[] => {
  return fiveDaysData.list
    .filter((_, index) => index % 2 === 0)
    .map((data: Forecast): ChartData => {
      return {
        date: data.date,
        temperature: data.temperature,
        dayOfTheWeek: getDayOfTheWeek(data.date),
        dateLong: getDateLong(data.date),
        hour: getFormattedHour(data.date),
        state: data.state,
        stateDescription: data.stateDescription,
        stateIcon: data.stateIcon
      };
    });
};

const getDayOfTheWeek = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const dayOfMonth = date.getDate();
  const today = new Date().getDate();
  const dayOfWeek = date
    .toLocaleString("es-ES", { weekday: "short" })
    .charAt(0)
    .toUpperCase();

  return dayOfMonth === today ? "Hoy" : `${dayOfWeek}${dayOfMonth}`;
};

const getDateLong = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric"
  });
};

const getFormattedHour = (timestamp: number): string => {
  const hour = new Date(timestamp * 1000).getHours();
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return `${hour} PM`;
  return `${hour} PM`;
};

const createDataIndices = (chartData: ChartData[]) => {
  return chartData.reduce(
    (
      acc: { date: string; from: number; to: number }[],
      data: ChartData,
      index,
      array
    ) => {
      const currentDate = new Date(data.date * 1000).getDate();
      const previousDate =
        index > 0 ? new Date(array[index - 1].date * 1000).getDate() : null;

      if (previousDate !== currentDate) {
        acc.push({ date: data.dayOfTheWeek, from: index, to: index });
      } else {
        acc[acc.length - 1].to = index;
      }

      return acc;
    },
    []
  );
};
