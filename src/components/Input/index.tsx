import { FormEvent } from "react"

type CountryAndCitiesProps = {
  iso2: string
  iso3: string
  country: string
  cities: string[]
}
interface InputProps {
  inputValue: string
  handleInput: (event: FormEvent<HTMLInputElement>) => void
  citiesData: CountryAndCitiesProps[]
}

const Input = ({ inputValue, handleInput, citiesData }: InputProps) => {
  return (
    <>
      <input list="countries" placeholder="Enter a location" value={inputValue} onChange={(event) => handleInput(event)} />
      <datalist id="countries">
        {citiesData.length > 0 && inputValue.length > 2
          ? citiesData.map(country => {
            return country.cities.map(city => {
              if (city.includes(inputValue)) {
                return <option>{city}, {country.country}</option>
              }
            })
          })
          : <></>
        }
      </datalist>
    </>
  )
}

export default Input