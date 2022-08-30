import Input from "./components/Input"
import Card from "./components/Card"
import axios from "axios"
import React, { FormEvent, useEffect, useState } from "react"

type CountryAndCitiesProps = {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}

export function App() {
  const [inputValue, setInputValue] = useState("")
  const [countriesAndCities, setCountriesAndCities] = useState<CountryAndCitiesProps[]>([])
  // const [city, setCity] = useState<string>([])

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value
    setInputValue(value)
    console.log(inputValue)
    // const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=Rua+Augusto+Benetti,180+-+Videira&key=${process.env.OPENCAGE_API_KEY}&pretty=1`)
  }

  useEffect(() => {
    const getCountriesAndCities = async () => {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries")
      setCountriesAndCities(response.data.data)
    }
    getCountriesAndCities()
  }, [])


  async function getCoordinates() {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${inputValue}&key=${process.env.OPENCAGE_API_KEY}&pretty=1`)
    console.log(response)
    const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data.results[0].geometry.lat}&lon=${response.data.results[0].geometry.lng}&appid=${process.env.OPENWEATHER_API_KEY} `)
    console.log(res2)
  }
  console.log(inputValue.length)

  return (
    <>
      <input list="countries" value={inputValue} onChange={(event) => handleInput(event)} />
      <datalist id="countries">
        {countriesAndCities.length > 0 && inputValue.length > 2
          ? countriesAndCities.map(country => {
            return country.cities.map(city => {
              if (city.includes(inputValue)) {
                return <option>{city}, {country.country}</option>
              }
            })
          })
          : <option>Select a country</option>
        }
      </datalist>
      <button onClick={getCoordinates}>OK</button>



      {/* <select name="countries" id="countries">
        {countriesAndCities.length > 0
          ? countriesAndCities.map(value => <option key={value?.iso3}>{value.country}</option>)
          : <option>Select a country</option>
        }
      </select> */}
      {/* <Input value={inputValue} onChange={handleInput} placeholder="city" id="city" /> */}
      <Card />
    </>
  )
}
