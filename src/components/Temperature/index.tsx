import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTemperatureArrowDown as temperatureDown,
  faTemperatureArrowUp as temperatureUp,
  faTemperatureEmpty as temperatureEmpty
} from '@fortawesome/free-solid-svg-icons'

enum Icons {
  up = "up",
  down = "down",
  actual = "actual"
}

type TemperatureProps = {
  icon: Icons
  temperatureValue: string
}


const Temperature = ({ icon, temperatureValue }: TemperatureProps) => {
  return (
    <div className="temperature" id={icon}>
      <FontAwesomeIcon icon={icon === "down"
        ? temperatureDown
        : icon === "up" ? temperatureUp
          : temperatureEmpty} />
      <span>{temperatureValue}</span>
    </div>
  )
}

export default Temperature