import { FormEvent, RefObject } from "react";
import BreedSelect from "./BreedSelect";
import NumberInput from "./NumberInput";
import SubBreedSelect from "./SubBreedSelect";
import SubmitButton from "./SubmitButton";

interface FormProps {
  submitHandler: (e: FormEvent) => void;
  breeds: string[];
  subBreeds: string[];
  breedInputChangeHandler: (breed: string | null) => void;
  subBreedInputChangeHandler: (breed: string | null) => void;
  numberRef: RefObject<HTMLInputElement>;
  validated: boolean
}

const Form: React.FC<FormProps> = ({
  submitHandler,
  breeds,
  subBreeds,
  breedInputChangeHandler,
  subBreedInputChangeHandler,
  numberRef,
  validated
}) => {
  return (
    <form onSubmit={(e) => submitHandler(e)} data-testid="form">
      <BreedSelect
        breeds={breeds}
        breedInputChangeHandler={breedInputChangeHandler}
        validated={validated}
      />
      <SubBreedSelect
        subBreeds={subBreeds}
        subBreedInputChangeHandler={subBreedInputChangeHandler}
      />
      <NumberInput numberRef={numberRef}/>
      <SubmitButton />
    </form>
  );
};

export default Form;
