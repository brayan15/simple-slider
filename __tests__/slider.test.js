import React from 'react'
import Slider from '../src/sharedComponents/slider/slider'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn()
}))

describe('Slider Title', () => {
  let wrapper
  const mockSetState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')

  useStateSpy.mockImplementation(init => [init, mockSetState])

  beforeEach(() => {
    wrapper = shallow(
      <Slider>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Slider>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render Slider with defaults values', () => {
    const sliders = wrapper.find('.slider__item-wrapper')
    const activeSliders = wrapper.find('.slider__item-wrapper--active')
    const prevSlider = wrapper.find('.slider__prev-arrow')

    expect(sliders.exists()).toBe(true)
    expect(activeSliders.exists()).toBe(true)
    expect(prevSlider.exists()).toBe(false)
    expect(sliders).toHaveLength(3)
    expect(activeSliders).toHaveLength(1)
  })

  it('Should render Slider with infiniteLoop prop', () => {
    wrapper.setProps({
      infiniteLoop: true
    })

    const sliders = wrapper.find('.slider__item-wrapper')
    const activeSliders = wrapper.find('.slider__item-wrapper--active')
    const prevSlider = wrapper.find('.slider__prev-arrow')

    prevSlider.props().onClick()
    wrapper.update()

    expect(mockSetState).toHaveBeenCalledWith(2)
    expect(sliders.exists()).toBe(true)
    expect(activeSliders.exists()).toBe(true)
    expect(prevSlider.exists()).toBe(true)
    expect(sliders).toHaveLength(3)
    expect(activeSliders).toHaveLength(1)
  })

  it('Should simulate next onclik without infiniteLoop', () => {
    wrapper.setProps({
      infiniteLoop: false
    })
    const nextSlide = wrapper.find('.slider__next-arrow').props()

    nextSlide.onClick()
    wrapper.update()

    expect(mockSetState).toHaveBeenCalledWith(1)
  })

  it('Should simulate next onclik with infiniteLoop', () => {
    wrapper.setProps({
      infiniteLoop: true
    })
    const nextSlide = wrapper.find('.slider__next-arrow').props()

    nextSlide.onClick()
    wrapper.update()

    expect(mockSetState).toHaveBeenCalledWith(1)
  })

  it('Should simulate onTouchStart event', () => {
    const slider = wrapper.props()

    slider.onTouchStart({
      touches: [{ clientX: 150 }]
    })
    
    expect(mockSetState).toHaveBeenCalledWith(false)
    expect(mockSetState).toHaveBeenCalledWith(150)

    wrapper.setProps()

    slider.onTouchMove({
      changedTouches: [
        {
          clientX: 300
        }
      ]
    })
    expect(mockSetState).toHaveBeenCalledWith(true)

    wrapper.setProps()

    slider.onTouchEnd({
      changedTouches: [
        {
          clientX: 300
        }
      ]
    })

    expect(mockSetState).toHaveBeenCalledWith(0)
    expect(mockSetState).toHaveBeenCalledWith(false)
  })
  
})
