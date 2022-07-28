import { fireEvent, render, screen } from '@testing-library/react'
import { Router, useNavigate } from 'react-router-dom'
import HomePage from '../../core/HomePage/HomePage'


describe('Home page test', () => {

    it('Test button', () => {
      


        render(<Router><HomePage navigate={useNavigate()} /></Router>)

    })


    // fireEvent.click(getByText("Register"));
    // expect(history.location.pathname).toBe("/sign-up");

})