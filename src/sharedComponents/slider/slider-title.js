// @flow
import * as React from 'react'

type PropsT = {
  light?: boolean,
  className?: string,
  uppercase?: boolean,
  children: React.Node
}

const SliderTitle = (props: PropsT) => (
  <div
  // $FlowFixMe
    className={`slider__item-title ${props.className} ${
      props.light ? 'slider__item-title--light' : ''
    } ${props.uppercase ? 'slider__item-title--uppercase' : ''}`}
  >
    {props.children}
  </div>
)

SliderTitle.defaultsProps = {
  light: false,
  className: '',
  uppercase: false
}

export default SliderTitle
