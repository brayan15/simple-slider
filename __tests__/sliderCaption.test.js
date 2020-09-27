import React from 'react'
import SliderCaption from '../src/sharedComponents/slider/slider-caption'

describe('Slider Title', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SliderCaption>
        <p>caption</p>
      </SliderCaption>
    )
  })

  it('Should render Slider Caption with defaults values', () => {
    const content = wrapper.find('.slider__item-caption')
    const light = wrapper.find('.slider__item-caption--light')
    const uppercase = wrapper.find('.slider__item-caption--uppercase')
    const caption = wrapper.find('p')

    expect(content.exists()).toBe(true)
    expect(light.exists()).toBe(false)
    expect(uppercase.exists()).toBe(false)
    expect(caption.exists()).toBe(true)
    expect(caption.text()).toBe('caption')
  })

  it('Should render Slider Caption with props', () => {
    wrapper.setProps({
      light: true,
      uppercase: true,
      className: 'some'
    })
    const light = wrapper.find('.slider__item-caption--light')
    const uppercase = wrapper.find('.slider__item-caption--uppercase')

    expect(light.exists()).toBe(true)
    expect(uppercase.exists()).toBe(true)
  })
})
