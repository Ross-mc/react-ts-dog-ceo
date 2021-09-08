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
  numberRef: RefObject<HTMLInputElement>
}

const Form: React.FC<FormProps> = ({
  submitHandler,
  breeds,
  subBreeds,
  breedInputChangeHandler,
  subBreedInputChangeHandler,
  numberRef
}) => {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <BreedSelect
        breeds={breeds}
        breedInputChangeHandler={breedInputChangeHandler}
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
