import { RefObject } from "react"

interface InputProps {
  numberRef: RefObject<HTMLInputElement>
}

const NumberInput: React.FC<InputProps> = ({numberRef}) => {
  return (
    <div className="input-container">
      <label htmlFor="number">Number of Images</label>
      <input type="number" min="1" max="10" name="number" ref={numberRef}/>
    </div>
  )
}

export default NumberInput