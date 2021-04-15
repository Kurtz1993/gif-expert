import { mount, ReactWrapper } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('AddCategoryComponent', () => {
  let wrapper: ReactWrapper;

  const setCategories = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = mount(<AddCategory setCategories={setCategories} />);
  });

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change the textbox', () => {
    const input = wrapper.find('input');
    const expectedText = 'hello';

    input.simulate('change', { target: { value: expectedText } });
  });

  test('should not POST the information onSubmit', () => {
    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call "setCategories" and clean input onSubmit', () => {
    const input = wrapper.find('input');
    const form = wrapper.find('form');
    const expectedText = 'hello';

    input.simulate('change', { target: { value: expectedText } });
    form.simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
