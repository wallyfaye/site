import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';

import App from '../src/app';

Enzyme.configure({ adapter: new Adapter() });

describe('/src/app.jsx', () => {
  it('renders an element with a class name demo', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('.demo')).to.have.length(1);
  });
});