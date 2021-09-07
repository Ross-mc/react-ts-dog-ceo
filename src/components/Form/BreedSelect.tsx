import { FormEvent } from "react";
import { BreedNames } from "../../types/stateTypes";

interface SelectProps {
  breeds: BreedNames;
  breedInputChangeHandler: (breed: string | null) => void;
}

const BreedSelect: React.FC<SelectProps> = ({
  breeds,
  breedInputChangeHandler,
}) => {
  return (
    <select
      name="breed"
      onChange={(e: FormEvent) => {
        const target = e.currentTarget as HTMLSelectElement;
        breedInputChangeHandler(target.value);
      }}
    >
      <option value="">--Please select a breed--</option>
      {breeds.map((breed) => (
        <option value={breed} key={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedSelect;
