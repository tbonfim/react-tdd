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

it('Should set page title to the value of the inputs ( name + lastName)', ()=>{
  const wrapper = mount(<ComponentToBeTested />);
  expect(document.title).toBe('Test First');
});

it('Should update page title to the value of the inputs ( name + lastName) when it changes', ()=>{
  const wrapper = mount(<ComponentToBeTested />);
  wrapper.find('#name').value('Always');
  wrapper.find('#lastName').value('Test')
  expect(document.title).toBe('Always Test');
});
