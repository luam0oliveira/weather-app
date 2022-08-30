interface InputProps {
  placeholder: string
  id: string
  onChange: Function
  value: string
}

const Input = ({ placeholder, id, onChange, value }: InputProps) => {
  return (
    <>
      <select name="countries" id="countries">

      </select>
      <input value={value} onChange={(event) => { onChange(event) }} placeholder={placeholder} id={id}></input>
    </>
  )
}

export default Input