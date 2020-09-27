import React from 'react'
import SliderDescription from '../src/sharedComponents/slider/slider-description'

describe('Slider Title', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SliderDescription>
        <p>description</p>
      </SliderDescription>
    )
  })

  it('Should render Slider Description with defaults values', () => {
    const content = wrapper.find('.slider__item-description')
    const light = wrapper.find('.slider__item-description--light')
    const offset = wrapper.find('.p-y-4.p-x-3')
    const description = wrapper.find('p')

    expect(content.exists()).toBe(true)
    expect(light.exists()).toBe(false)
    expect(offset.exists()).toBe(false)
    expect(description.exists()).toBe(true)
    expect(description.text()).toBe('description')
  })

  it('Should render Slider Description with props', () => {
    wrapper.setProps({
      light: true,
      offset: true,
      className: 'some'
    })
    const light = wrapper.find('.slider__item-description--light')
    const offset = wrapper.find('.p-y-4.p-x-3')

    expect(light.exists()).toBe(true)
    expect(offset.exists()).toBe(true)
  })
})
