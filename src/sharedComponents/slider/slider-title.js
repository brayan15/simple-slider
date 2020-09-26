// @flow
import * as React from 'react'

type PropsT = {
  light?: boolean,
  uppercase?: boolean,
  children: React.Node
}

const SliderTitle = (props: PropsT) => (
  <div
    className={`slider__item-title ${props.light ? 'slider__item-title--light' : ''} ${
      props.uppercase ? 'slider__item-caption--uppercase' : ''
    }`}
  >
    {props.children}
  </div>
)

SliderTitle.defaultsProps = {
  light: false,
  uppercase: false
}

export default SliderTitle
