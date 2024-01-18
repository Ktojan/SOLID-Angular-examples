export const sunny25: DayWeather = { weather: { is_sunny: true, temp: 2 } };

export interface DayWeather {
  weather: {
    is_sunny: boolean;
    temp: number;
  };
}
