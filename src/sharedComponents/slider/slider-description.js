// @flow
import * as React from 'react'

type PropsT = {
  light: boolean,
  className?: string,
  offset: boolean,
  children: React.Node
}

const SliderDescription = (props: PropsT) => (
  <div
  // $FlowFixMe
    className={`slider__item-description ${props.className} ${props.offset ? 'p-y-4 p-x-3' : ''} ${
      props.light ? 'slider__item-description--light' : ''
    }`}
  >
    {props.children}
  </div>
)

SliderDescription.defaultProps = {
  light: false,
  offset: false,
  className: ''
}

export default SliderDescription
