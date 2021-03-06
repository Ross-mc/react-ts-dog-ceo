import React, { useEffect, useState, FormEvent, useRef } from "react";
import Form from "./components/Form/Form";
import ImageContainer from "./components/Images/ImageContainer";
import MainContainer from "./components/UI/MainContainer";
import Title from "./components/Title/Title";
import { BreedsListResponse } from "./types/api";
import { BreedNames } from "./types/stateTypes";
import API from "./utils/API";
import Spinner from "./components/UI/Spinner";
import ErrorDisplay from "./components/UI/ErrorDisplay";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [breeds, setBreeds] = useState<BreedsListResponse>({});
  const [breedNames, setBreedNames] = useState<BreedNames>([]);
  const [subBreedNames, setsubBreedNames] = useState<BreedNames>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedsubBreed, setSelectedsubBreed] = useState<string>("");
  const [apiError, setApiError] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [validated, setValidated] = useState<boolean>(true);

  const numberRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    API.getBreedsList()
      .then((data) => {
      setBreeds(data);
    })
      .catch((error: any) => {
        setApiError(true)
      })
      .finally(() => {
        setLoading(false);
      });
    const numberInput = document.getElementById("number-input") as HTMLInputElement;
    numberInput.value = "0";
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
    if (!selectedBreed){
      setValidated(false);
      return;
    }
    try {
      setLoading(true);
      const inputNumber = numberRef.current?.value || 3;
      setValidated(true);
      const result = await API.getRandomImgs(selectedBreed, selectedsubBreed, +inputNumber);
      setImages(result);
    } catch (error) {
      setImages([]);
      setApiError(true)
    } finally {
      setLoading(false);
    }

  };

  return (
    <MainContainer>
      <Title />
      <Form
        submitHandler={submitSearch}
        breeds={breedNames}
        subBreeds={subBreedNames}
        breedInputChangeHandler={breedInputChangeHandler}
        subBreedInputChangeHandler={subBreedInputChangeHandler}
        numberRef={numberRef}
        validated={validated}
      />
      {loading ? <Spinner />:  (
        <ImageContainer images={images}/>
      )}
      {apiError && <ErrorDisplay message={"Api Error"}/>}
    </MainContainer>
  );
};

export default App;
