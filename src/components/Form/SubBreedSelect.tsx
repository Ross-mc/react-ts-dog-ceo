import { BreedNames } from "../../types/stateTypes";
import { FormEvent } from "react";

interface SelectProps {
  subBreeds: BreedNames;
  subBreedInputChangeHandler: (breed: string | null) => void;
}

const SubBreedSelect: React.FC<SelectProps> = ({
  subBreeds,
  subBreedInputChangeHandler,
}) => {
  return (
    <select
      name="breed"
      disabled={subBreeds.length < 1}
      onChange={(e: FormEvent) => {
        const target = e.currentTarget as HTMLSelectElement;
        subBreedInputChangeHandler(target.value);
      }}
    >
      <option value="">--Please select a sub-breed--</option>
      {subBreeds.map((subBreed) => (
        <option value={subBreed} key={subBreed}>
          {subBreed}
        </option>
      ))}
    </select>
  );
};

export default SubBreedSelect;
