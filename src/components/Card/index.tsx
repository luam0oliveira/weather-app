import Temperature from "../Temperature"

type CustomWeatherProps = {
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }
  temp: {
    tempMax: string
    tempMin: string
    temp: string
  }
}

type CardProps = {
  customWeather: CustomWeatherProps
}

enum Icons {
  up = "up",
  down = "down",
  actual = "actual"
}

const Card = ({ customWeather }: CardProps) => {
  return (
    <div className="card">
      <h2>{customWeather.weather.main}</h2>
      <h3>{customWeather.weather.description}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${customWeather.weather.icon}@2x.png`}
        alt={customWeather.weather.main}
      />
      <div>
        <Temperature icon={Icons.actual} temperatureValue={customWeather.temp.temp} />
        <div>
          <Temperature icon={Icons.up} temperatureValue={customWeather.temp.tempMax} />
          <Temperature icon={Icons.down} temperatureValue={customWeather.temp.tempMin} />
        </div>
      </div>
    </div>
  )
}

export default Card