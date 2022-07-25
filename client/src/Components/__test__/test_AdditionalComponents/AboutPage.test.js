import { render, screen } from '@testing-library/react';
import AboutUsPage from '../../AdditionalComponents/AboutUsPage/AboutUsPage'

test('renders aboutUS', () => {
    render(<AboutUsPage />);
      const linkElement = screen.getByText(/Our Story/i);
      const imageElement =screen.findByTestId('image-element')
    //   expect(imageElement)
      expect(linkElement).toBeInTheDocument();
});
