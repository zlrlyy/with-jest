import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import '@testing-library/jest-dom'

function drinkAll(callback: (flavour: string) => void, flavour: string) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  it('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
})
