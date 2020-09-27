import { configure, shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

Object.defineProperty(window, 'matchMedia', {
  value: jest.fn(() => ({ matches: true }))
})

expect.extend({})

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount
