import { FormEvent } from "react"

interface InputProps {
  inputValue: string
  handleInput: (event: FormEvent<HTMLInputElement>) => void
}

const Input = ({ inputValue, handleInput }: InputProps) => {
  return (
    <>
      <input placeholder="Enter a location" value={inputValue} onChange={(event) => handleInput(event)} />
    </>
  )
}

export default Input