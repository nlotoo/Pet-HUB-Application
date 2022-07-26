import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import HomePage from '../../core/HomePage/HomePage'

test('Home page test', () => {


    render(<Router location={history.location} navigator={history}><HomePage /></Router>)

    // fireEvent.click(getByText("Register"));
    // expect(history.location.pathname).toBe("/sign-up");

})