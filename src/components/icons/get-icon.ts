const iconList = [
  { code: "01d", symbol: "sun" },
  { code: "01n", symbol: "moon" },
  { code: "02d", symbol: "cloud-sun" },
  { code: "02n", symbol: "cloud-moon" },
  { code: "03d", symbol: "cloud" },
  { code: "03n", symbol: "cloud" },
  { code: "04d", symbol: "cloud-dark" },
  { code: "04n", symbol: "cloud-dark" },
  { code: "09d", symbol: "cloud-rain-sun" },
  { code: "09n", symbol: "cloud-rain-moon" },
  { code: "10d", symbol: "cloud-drizzle-sun" },
  { code: "10n", symbol: "cloud-drizzle-moon" },
  { code: "11d", symbol: "cloud-lightning" },
  { code: "11n", symbol: "cloud-lightning-moon" },
  { code: "13d", symbol: "snowflake" },
  { code: "50d", symbol: "cloud-fog" },
  { code: "50n", symbol: "cloud-fog" }
] as const;

export type WeatherStateIconCode = (typeof iconList)[number]["code"];
export type WeatherStateIconSymbol = (typeof iconList)[number]["symbol"];

export const getWeatherStateIcon = (
  code: WeatherStateIconCode
): WeatherStateIconSymbol | null => {
  const icon = iconList.find((icon) => icon.code === code);
  if (!icon) return null;

  return icon.symbol;
};
