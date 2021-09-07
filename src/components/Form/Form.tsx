import { FormEvent } from "react";
import BreedSelect from "./BreedSelect";
import SubBreedSelect from "./SubBreedSelect";
import SubmitButton from "./SubmitButton";

interface FormProps {
  submitHandler: (e: FormEvent) => void;
  breeds: string[];
  subBreeds: string[];
  breedInputChangeHandler: (breed: string | null) => void;
  subBreedInputChangeHandler: (breed: string | null) => void;
}

const Form: React.FC<FormProps> = ({
  submitHandler,
  breeds,
  subBreeds,
  breedInputChangeHandler,
  subBreedInputChangeHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <BreedSelect
        breeds={breeds}
        breedInputChangeHandler={breedInputChangeHandler}
      />
      <SubBreedSelect
        subBreeds={subBreeds}
        subBreedInputChangeHandler={subBreedInputChangeHandler}
      />
      <SubmitButton />
    </form>
  );
};

export default Form;
