import Gallery from '../client/src/components/Gallery.jsx';
import Carousel from '../client/src/components/Carousel.jsx';

describe('<Gallery />', () => {
  it('exists', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper).toExist();
  });

  it('renders <Carousel /> component', () => {
    const wrapper = shallow(<Gallery />);
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });
});