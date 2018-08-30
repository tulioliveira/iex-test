import React from 'react';
import ReactDOM from 'react-dom';
import TagList from './TagList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TagList iteratorKey="test" data={[1, 2, 3]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
