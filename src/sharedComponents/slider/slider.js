// @flow
import * as React from 'react'
import prevIcon from '../../statics/prev-icon.png'
import nextIcon from '../../statics/next-icon.png'

type PropsT = {
  className?: string,
  infiniteLoop?: boolean,
  children: Array<React.Node>
}

const minDistance = 100

const Slider = (props: PropsT) => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [swipe, setSwipe] = React.useState(0)
  const [swiping, setSwiping] = React.useState(false)

  const goToPrevSlide = () => {
    if (activeIndex < 1 && props.infiniteLoop) {
      setActiveIndex(props.children.length - 1)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }

  const goToNextSlide = () => {
    if (activeIndex === props.children.length - 1 && props.infiniteLoop) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  const touchStart = event => {
    const touch = event.touches[0]

    setSwiping(false)
    setSwipe(touch.clientX)
  }

  const touchMove = event => {
    if (event.changedTouches && event.changedTouches.length) {
      setSwiping(true)
    }
  }

  const touchEnd = event => {
    const touch = event.changedTouches[0]
    const absX = Math.abs(touch.clientX - swipe)

    // if swipe is greater than min distance it means slider going to do slide
    if (swiping && absX > minDistance) {
      // Go to next slide
      if (
        swipe > touch.clientX &&
        (activeIndex !== props.children.length - 1 || props.infiniteLoop)
      ) {
        goToNextSlide()
      }

      // Go to prev slide
      if (swipe < touch.clientX && (activeIndex !== 0 || props.infiniteLoop)) {
        goToPrevSlide()
      }
    }
    setSwipe(0)
    setSwiping(false)
  }

  return (
    <div
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
      onTouchStart={touchStart}
      // $FlowFixMe
      className={`slider ${props.className}`}
    >
      {props.children.map((child, index) => (
        <div
          key={index}
          className={`slider__item-wrapper fade ${
            index === activeIndex ? 'slider__item-wrapper--active' : ''
          }`}
        >
          {child}
        </div>
      ))}
      <div className='slider__controls'>
        {activeIndex !== 0 || props.infiniteLoop ? (
          <div className='slider__prev-arrow' onClick={goToPrevSlide}>
            <div className='slider__next-arrow-icon-wrapper'>
              <img src={prevIcon} alt='prev icon' className='slider__prev-arrow-icon' />
            </div>
          </div>
        ) : null}

        {activeIndex !== props.children.length - 1 || props.infiniteLoop ? (
          <div className='slider__next-arrow' onClick={goToNextSlide}>
            <div className='slider__next-arrow-icon-wrapper'>
              <img src={nextIcon} alt='next icon' className='slider__next-arrow-icon' />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

Slider.defaultProps = {
  className: '',
  infiniteLoop: false
}

export default Slider
