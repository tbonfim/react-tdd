import React from 'react';
import ReactDOM from 'react-dom';
import ComponentToBeTested from './ComponentToBeTested';

it('renders ComponentToBeTested without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentToBeTested />, div);
  ReactDOM.unmountComponentAtNode(div);
});
