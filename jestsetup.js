// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.mount = mount;
// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};