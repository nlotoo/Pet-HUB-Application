import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AboutUsPage from '../../AdditionalComponents/AboutUsPage/AboutUsPage'

test('About us page test', () => {
    render(<AboutUsPage />);
    screen.getByText(/Our Story/);
    screen.getByAltText(/our-story-img/)
});
