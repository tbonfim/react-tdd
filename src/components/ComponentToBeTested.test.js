import React from 'react';
import ReactDOM from 'react-dom';
import ComponentToBeTested from './ComponentToBeTested';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders ComponentToBeTested without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentToBeTested />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Should have at least 2 input fields', () => {
  const wrapper = mount(<ComponentToBeTested />);
  expect(wrapper.find('input')).toHaveLength(2);
});