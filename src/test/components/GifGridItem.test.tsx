import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('GifGridItem', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<GifGridItem id="" url="" title="" />);

    expect(wrapper).toMatchSnapshot();
  });
});
