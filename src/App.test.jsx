import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingPage from './components/pages/BookingPage';
import Heading from "../sections/reservePages/Heading";

  // Test: that the component renders
  test("renders the App component", () => {
    const app = render(<App />);
    expect(app).not.toBe(null);
});

// test('Renders the Header heading', () => {
//     render(<BrowserRouter><App /></BrowserRouter>);
//     const headingElement = screen.getByText("Reserve a Table");
//     expect(headingElement).toBeInTheDocument();

//     const reserveButton = screen.getByRole("button");
//     fireEvent.click(reserveButton);

//     const headingElementNew = screen.getByText("Reserve a table");
//     expect(headingElementNew).toBeInTheDocument();
// })

