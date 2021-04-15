import { shallow } from 'enzyme';

import GifGrid from '../../components/GifGrid';
import GifGridItem from '../../components/GifGridItem';
import { useFetchGifs } from '../../hooks/use-fetch-gifs.hook';
import { GifInfo } from '../../models/gif-info.model';
jest.mock('../../hooks/use-fetch-gifs.hook');

describe('GifGridComponent', () => {
  const mockCategory = 'Overwatch';

  test('should render', () => {
    (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
      images: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={mockCategory} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when images are loaded via "useFetchGifs"', () => {
    const mockGifs: GifInfo[] = [
      {
        id: 'ABC',
        url: 'https://someething.com/algo.jpg',
        title: 'a title',
      },
    ];
    (useFetchGifs as jest.MockedFunction<typeof useFetchGifs>).mockReturnValue({
      images: mockGifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={mockCategory} />);

    expect(wrapper.find(GifGridItem).length).toBe(1);
  });
});
