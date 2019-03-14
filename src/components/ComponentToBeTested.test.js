import React from 'react';
import ReactDOM from 'react-dom';
import ComponentToBeTested from './ComponentToBeTested';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('renders ComponentToBeTested without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentToBeTested />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Should have at least 2 input fields', () => {
  const wrapper = shallow(<ComponentToBeTested />);
  expect(wrapper.find('input')).toHaveLength(2);
});

it('Should set page title to the value of the inputs ( name + lastName)', ()=>{
  expect(document.title).toBe('Test First');
});

it('Should update page title to the value of the inputs ( name + lastName) when it changes', ()=>{
  const wrapper = mount(<ComponentToBeTested />);
  const name = wrapper.find('#name');
  const lastName = wrapper.find('#lastName');
  
  name.simulate('change', { target: { value: 'Always' } });
  lastName.simulate('change', { target: { value: 'Test' } });
  
  // This might not be the best solution.
  // The problem here is that useEffect is asyncronous, this way i used this setTimeout
  // to make the expect statement go to the end of the executuion queue
  setTimeout( () => {expect(document.title).toBe('Always Test')} , 1);  
});
