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
});
