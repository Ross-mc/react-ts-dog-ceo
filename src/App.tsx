import React, { useEffect, useState, FormEvent, useRef } from "react";
import Form from "./components/Form/Form";
import MainContainer from "./components/Layout/MainContainer";
import Title from "./components/Title/Title";
import { BreedsListResponse } from "./types/api";
import { BreedNames } from "./types/stateTypes";
import API from "./utils/API";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [breeds, setBreeds] = useState<BreedsListResponse>({});
  const [breedNames, setBreedNames] = useState<BreedNames>([]);
  const [subBreedNames, setsubBreedNames] = useState<BreedNames>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedsubBreed, setSelectedsubBreed] = useState<string>("");

  const numberRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //TODO: trycatch
    API.getBreedsList().then((data) => {
      setBreeds(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const tempBreedNames: BreedNames = [];
    for (const breed in breeds) {
      tempBreedNames.push(breed);
    }
    setBreedNames(tempBreedNames);
  }, [breeds]);

  const breedInputChangeHandler = (breed: string | null) => {
    if (breed) {
      setSelectedBreed(breed);
      setSelectedsubBreed("");
      setsubBreedNames(breeds[breed]);
    }
  };

  const subBreedInputChangeHandler = (breed: string | null) => {
    if (breed) {
      setSelectedsubBreed(breed);
    } else {
      setSelectedsubBreed("");
    }
  };

  const submitSearch = async (e: FormEvent) => {
    e.preventDefault();
    //TODO: trycatch

    const inputNumber = numberRef.current?.value || 3;
    const result = await API.getRandomImgs(selectedBreed, selectedsubBreed, +inputNumber);
    console.log(result);
  };

  return (
    <MainContainer>
      <Title />
      {!loading && (
        <Form
          submitHandler={submitSearch}
          breeds={breedNames}
          subBreeds={subBreedNames}
          breedInputChangeHandler={breedInputChangeHandler}
          subBreedInputChangeHandler={subBreedInputChangeHandler}
          numberRef={numberRef}
        />
      )}
    </MainContainer>
  );
};

export default App;
