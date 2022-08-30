import Input from "./components/Input"
import Card from "./components/Card"
import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import CustomModal from "./components/CustomModal"

type CountryAndCitiesProps = {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}

type CustomWeatherProps = {
  id: number
  main: string
  description: string
  icon: string
}

export function App() {
  const [inputValue, setInputValue] = useState("")
  const [countriesAndCities, setCountriesAndCities] = useState<CountryAndCitiesProps[]>([])
  const [customWeather, setCustomWeather] = useState<CustomWeatherProps>({} as CustomWeatherProps)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setInputValue(value)
  }

  useEffect(() => {
    const getCountriesAndCities = async () => {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries")
      setCountriesAndCities(response.data.data)
    }
    getCountriesAndCities()
  }, [])

  async function getCoordinates() {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${process.env.OPENCAGE_API_KEY}&pretty=1`)
      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data.results[0].geometry.lat}&lon=${response.data.results[0].geometry.lng}&appid=${process.env.OPENWEATHER_API_KEY} `)
      const weather = res2.data.weather[0]
      setCustomWeather(weather)
    } catch (err) {

    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="container">
      <Input citiesData={countriesAndCities} handleInput={handleInput} inputValue={inputValue} />

      <button onClick={getCoordinates}>OK</button>

      <CustomModal contentLabel="Location not found" isOpen={isOpen} onRequestClose={closeModal} />
      {Object.hasOwn(customWeather, "id")
        ? <div>
          <h1>{customWeather.main}</h1>
          <h2>{customWeather.description}</h2>
          <img src={`http://openweathermap.org/img/wn/${customWeather.icon}@2x.png`} alt={customWeather.main} />
        </div>
        : <></>}
      <Card />
    </div>
  )
}
