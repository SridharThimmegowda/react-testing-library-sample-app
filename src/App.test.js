import React from 'react';
import App from './App';
import { render, cleanup, fireEvent, waitForElement  } from '@testing-library/react';

describe("React Testing Library", () => {
    afterEach(cleanup);

    test("render the click event of increment button and increment counter value", async() => {
        const { getByTestId, getByText } = render(<App />);
        const incrementbtn = getByText(/Increment/i);
        fireEvent.click(incrementbtn);
        const incrementelem = await waitForElement(() => getByTestId('counter-value'));
        expect(incrementelem).toHaveTextContent('1');

    });

    test("render the click event of decrement button and decrement counter value", async() => {
        const { getByTestId, getByText } = render(<App />);
        const decrementbtn = getByText(/Decrement/i);
        fireEvent.click(decrementbtn);
        const decrementelem = await waitForElement(() => getByTestId('counter-value'));
        expect(decrementelem).toHaveTextContent('0');

    });

    test("onChange() is called upon changing the text field and button disabled/enabled check", () => {
        const { getByTestId } = render(<App />);
        // const searchInput = getByPlaceholderText(/Deletetxt/i);
        const deleteInput = getByTestId('deletetxt');
        const deletebtn = getByTestId('delete-btn');
        const delete_text = 'DELETE';
        expect(deleteInput.value).toEqual('');
        fireEvent.change(deleteInput, { target: { value: delete_text } });
        //expect(searchInput.onchange).toBeCalledTimes(1);
        expect(deleteInput.value).toEqual(delete_text);
        expect(deletebtn).not.toBeDisabled();
      });

});