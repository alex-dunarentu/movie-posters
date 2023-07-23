// SortGallery.test.js
import { render, screen, fireEvent, within } from '@testing-library/react';
import SortGallery from './sort-gallery.component';

describe('SortGallery component', () => {
  it('should trigger sort option change', () => {
    const setSortOption = jest.fn();

    render(
      <SortGallery sortOption="Year" setSortOption={setSortOption} orderOption="Ascending" setOrderOption={() => {}} />
    );

    fireEvent.mouseDown(screen.getByLabelText('Release date'));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/release date/i));
    expect(setSortOption.mock.calls).toHaveLength(0);
    fireEvent.click(listbox.getByText(/name/i));
    expect(setSortOption.mock.calls).toHaveLength(1);
  });
  it('should trigger order option change', () => {
    const setOrderOption = jest.fn();

    render(
      <SortGallery sortOption="Title" setSortOption={() => {}} orderOption="Descending" setOrderOption={setOrderOption} />
    );

    fireEvent.mouseDown(screen.getByLabelText('Descending'));
    const listbox = within(screen.getByRole('listbox'));

    fireEvent.click(listbox.getByText(/descending/i));
    expect(setOrderOption.mock.calls).toHaveLength(0);
    fireEvent.click(listbox.getByText(/ascending/i));
    expect(setOrderOption.mock.calls).toHaveLength(1);
  });
});
