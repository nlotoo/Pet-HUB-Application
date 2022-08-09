import { fireEvent, getByText, render, renderHook, screen } from '@testing-library/react'
import { useContext, useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Router, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../services/UserContex'
import HomePage from '../../core/HomePage/HomePage'



let container;

const [value, setValue] = useState('');

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test("with ReactDOM", () => {
    act(() => {
        render((
            <UserContext.Provider value={{ value, setValue }}>
                <HomePage navigate={useNavigate()} />
            </UserContext.Provider>
        ), container);
    });

    expect(true);
});


// it('Test button', () => {
//     render(<HomePage navigate={useNavigate()}></HomePage>)
// })

