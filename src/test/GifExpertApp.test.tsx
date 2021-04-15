import { shallow } from 'enzyme';
import GifGrid from '../components/GifGrid';

import GifExpertApp from '../GifExpertApp';

describe('GifExpertAppComponent', () => {
  test('should render', () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should render a list of categories', () => {
    const categories = ['One Punch', 'Katekyo'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper.find(GifGrid).length).toBe(categories.length);
  });
});
