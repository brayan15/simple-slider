import React from 'react'
import SliderTitle from '../src/sharedComponents/slider/slider-title'

describe('Slider Title', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SliderTitle>
        <h1>Title</h1>
      </SliderTitle>
    )
  })

  it('Should render Slider Title with defaults values', () => {
    const content = wrapper.find('.slider__item-title')
    const light = wrapper.find('.slider__item-title--light')
    const uppercase = wrapper.find('.slider__item-title--uppercase')
    const title = wrapper.find('h1')

    expect(content.exists()).toBe(true)
    expect(light.exists()).toBe(false)
    expect(uppercase.exists()).toBe(false)
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Title')
  })

  it('Should render Slider Title with props', () => {
    wrapper.setProps({
      light: true,
      uppercase: true,
      className: 'some'
    })
    const light = wrapper.find('.slider__item-title--light')
    const uppercase = wrapper.find('.slider__item-title--uppercase')

    expect(light.exists()).toBe(true)
    expect(uppercase.exists()).toBe(true)
  })
})
