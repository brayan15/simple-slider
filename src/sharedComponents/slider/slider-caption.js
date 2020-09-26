// @flow
import * as React from 'react'

type PropsT = {
  light?: boolean,
  className?: string,
  uppercase?: boolean,
  children: React.Node
}

const SliderCaption = (props: PropsT) => (
  <div
  // $FlowFixMe
    className={`slider__item-caption ${props.className} ${
      props.light ? 'slider__item-caption--light' : ''
    } ${props.uppercase ? 'slider__item-caption--uppercase' : ''}`}
  >
    {props.children}
  </div>
)

SliderCaption.defaultsProps = {
  light: false,
  className: '',
  uppercase: false
}

export default SliderCaption
