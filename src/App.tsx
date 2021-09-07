import React, {useEffect, useState, useCallback} from 'react';
import { BreedsListResponse } from './types/api';
import API from "./utils/API";

const App: React.FC = () =>  {
  const [breeds, setBreeds] = useState<BreedsListResponse>({});
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBreeds = useCallback(async () => {
    const data = await API.getBreedsList();
    setBreeds(data);
    console.info(breeds);
    setLoading(false);
    console.info(loading);
  }, [])
  
  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds])

  return (
    <div>
        <h1>Hello World</h1>
    </div>
  );
}

export default App;
