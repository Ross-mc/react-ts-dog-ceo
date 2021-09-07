import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import API from '../../utils/API';

describe('App', () => {
  it('should call the API getBreedsList method on load', () => {
    const spy = jest.spyOn(API, 'getBreedsList');
    render(<App />);
    expect(spy).toBeCalledTimes(1);
  });
})
