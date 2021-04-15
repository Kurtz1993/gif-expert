import { shallow, ShallowWrapper } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem', () => {
  const mockTitle = 'This is a mock title';
  const mockUrl = 'mockUrl';

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={mockTitle} url={mockUrl} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain a p element with the given title', () => {
    const p = wrapper.find('p');

    expect(p.text().trim()).toBe(mockTitle);
  });

  it('should have an img with the given title as an alt property and the given url as src', () => {
    const img = wrapper.find('img');

    expect(img.prop('alt')).toBe(mockTitle);
    expect(img.prop('src')).toBe(mockUrl);
  });

  it('should have the class animate__fadeIn', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate__fadeIn')).toBeTruthy();
  });
});
