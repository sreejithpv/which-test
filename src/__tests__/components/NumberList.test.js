import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';
import NumberList from '../../components/NumberList';

const onClick=jest.fn();
const baseProps = {
  value: 10,
  onClick,
  isSelected: false,
  isMultipliable: false,
}
const renderFun = ( props = baseProps ) => TestRenderer.create(<NumberList {...props} />);

describe('NumberList Component', () => {
  test("should render snapshot with default props", () => {
    const tree = renderFun();
    expect(tree.toJSON()).toMatchSnapshot();
  });
  test("should render selected class name when isSelected", () => {
    const props = {
      ...baseProps,
      isSelected: true,
    }
    const tree = renderFun(props);
    expect(tree.toJSON()).toMatchSnapshot();
  });
  test("should render active class name when isMultipliable", () => {
    const props = {
      ...baseProps,
      isMultipliable: true,
    }
    const tree = renderFun(props);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});