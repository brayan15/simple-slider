import React from 'react'
import SliderItem from '../src/sharedComponents/slider/slider-item'

describe('Slider Title', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SliderItem>
        <p>item</p>
      </SliderItem>
    )
  })

  it('Should render Slider Item with defaults values', () => {
    const item = wrapper.find('p')

    expect(item.exists()).toBe(true)
    expect(item.text()).toBe('item')
  })
})
