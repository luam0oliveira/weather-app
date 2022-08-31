import Input from "./components/Input"
import Card from "./components/Card"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import CustomModal from "./components/CustomModal"


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

export function App() {
  const [inputValue, setInputValue] = useState("")
  const [customWeather, setCustomWeather] = useState<CustomWeatherProps>({} as CustomWeatherProps)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setInputValue(value)
  }

  async function getCoordinates(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${process.env.OPENCAGE_API_KEY}&pretty=1`)
      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data.results[0].geometry.lat}&lon=${response.data.results[0].geometry.lng}&units=metric&appid=${process.env.OPENWEATHER_API_KEY} `)
      console.log(res2)
      const weather = {
        weather: res2.data.weather[0],
        temp: {
          tempMax: Number(res2.data.main.temp_max).toFixed(0),
          tempMin: Number(res2.data.main.temp_min).toFixed(0),
          temp: Number(res2.data.main.temp).toFixed(0)
        }
      }
      setCustomWeather(weather)
    } catch (err) {
      setIsOpen(true)
    }
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="container">
      <form className="search_box" action="/" onSubmit={(event) => getCoordinates(event)}>
        <Input handleInput={handleInput} inputValue={inputValue} />
        <button type="submit">Search</button>
      </form>
      <div className="search_box">
      </div>

      <CustomModal contentLabel="Location not found" isOpen={isOpen} onRequestClose={closeModal} closeButton={closeModal} />
      {Object.hasOwn(customWeather, "weather")
        ? <Card customWeather={customWeather} />
        : <div className="notice"><p>Enter a city to get it weather</p></div>}

    </div>
  )
}
