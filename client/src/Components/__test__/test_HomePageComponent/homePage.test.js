import { fireEvent, getByText, render, screen } from '@testing-library/react'
import { useContext, useState } from 'react'
import { Router, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../services/UserContex'
import HomePage from '../../core/HomePage/HomePage'


describe('Home page test', () => {

    it('Test button', () => {
        const { getByText } = render(<UserContext.Provider value={{ 'value': 'setVAlue' }} ><Router><HomePage navigate={useNavigate()} /></Router> </UserContext.Provider>)
    })


})