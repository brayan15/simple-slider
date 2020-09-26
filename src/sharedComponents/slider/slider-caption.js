// @flow
import * as React from 'react'

type PropsT = {
  light?: boolean,
  uppercase?: boolean,
  children: React.Node
}

const SliderCaption = (props: PropsT) => (
  <div
    className={`slider__item-caption ${props.light ? 'slider__item-caption--light' : ''} ${
      props.uppercase ? 'slider__item-caption--uppercase' : ''
    }`}
  >
    {props.children}
  </div>
)

SliderCaption.defaultsProps = {
  light: false,
  uppercase: false
}

export default SliderCaption
