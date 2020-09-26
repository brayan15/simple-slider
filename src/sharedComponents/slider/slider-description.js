// @flow
import * as React from 'react'

type PropsT = {
  light: boolean,
  offset: boolean,
  children: React.Node
}

const SliderDescription = (props: PropsT) => (
  <div
    className={`slider__item-description ${props.offset ? 'p-y-4 p-x-3' : ''} ${
      props.light ? 'slider__item-description--light' : ''
    }`}
  >
    {props.children}
  </div>
)

SliderDescription.defaultProps = {
  offset: false,
  light: false
}

export default SliderDescription
