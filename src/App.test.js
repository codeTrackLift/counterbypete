import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders 2 buttons and counter, which starts at zero', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);;
    expect(counter).toHaveTextContent(0);
});

test('Click Me button increments counter by 1', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const clickme = screen.getByTestId('clickme');
    fireEvent.click(clickme);
    expect(counter).toHaveTextContent(1);
});

test('Reset button returns counter to 0, after counter is incremented a random number of times', () => {
    render(<App />);
    const counter = screen.getByTestId('counter');
    const clickme = screen.getByTestId('clickme');
    const reset = screen.getByTestId('reset');
    const random = Math.floor(Math.random() * 100);
    for (let i = 0; i < random; i++) {
        fireEvent.click(clickme);
    }
    expect(counter).toHaveTextContent(random);
    fireEvent.click(reset);
    expect(counter).toHaveTextContent(0);
});
