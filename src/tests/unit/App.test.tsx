import { render } from '@testing-library/react';
import App from '../../App';
import API from '../../utils/API';

describe('App', () => {
  let spy: jest.SpiedFunction<any>;
  beforeEach(() => {
    spy = jest.spyOn(API, 'getBreedsList').mockReturnValue(Promise.resolve({}));
  })
  it('should call the API getBreedsList method on load', () => {
    render(<App />);
    expect(spy).toBeCalledTimes(1);
  });
  it('should render the sub-components', () => {
    const wrapper = render(<App />);
    expect(wrapper.getByTestId('test-container')).toBeTruthy();
    expect(wrapper.getByTestId('title')).toBeTruthy();
    expect(wrapper.getByTestId('form')).toBeTruthy();
  })
})
