import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${customWeather.weather.icon}@2x.png`}
          alt={customWeather.weather.main}
        />
        <h3 className="card__title">{customWeather.weather.main}</h3>
      </div>
      <div>
        <Temperature icon={Icons.down} temperatureValue={customWeather.temp.tempMin} />
        <Temperature icon={Icons.up} temperatureValue={customWeather.temp.tempMax} />
        <Temperature icon={Icons.actual} temperatureValue={customWeather.temp.temp} />
      </div>
    </div>
  )
}

export default Card